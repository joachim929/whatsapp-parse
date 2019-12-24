import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whatsAppToHtml'
})
export class WhatsAppToHtmlPipe implements PipeTransform {

  constructor() { }

  transform(value: string): string {
    return value ? this.findTextToParse(value.replace(/(?:\r\n|\r|\n)/g, '<br>')) : value;
  }

  findTextToParse(value: string): string {
    const toParse = value.match(/([\*\_\~](?!\s)).+?(?<!\s)\1/g);
    if (!toParse) {
      return value;
    }
    for (const str of toParse) {
      if (str.replace(' ', '').match(/^(.)\1*$/)) {
        continue;
      }
      let parsed = this.parseWhatsappToHtml(str);
      parsed = this.findTextToParse(parsed);
      value = value.replace(str, parsed);
    }
    return value;
  }

  parseWhatsappToHtml(value: string): string {
    const tags = {
      '*': 'strong',
      '_': 'i',
      '~': 's'
    };
    const htmlTag = tags[value[0]];
    if (!htmlTag) {
      return value;
    }
    return '<' + htmlTag + '>' + value.substr(1, value.length - 2) + '</' + htmlTag + '>';
  }
}
