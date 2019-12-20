import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondIterationService {
  formattedArray = [];
  starHold: number;
  lineHold: number;

  constructor() {
  }

  spacingMethod(message: string) {
    this.formattedArray = [];

    if (message.length < 2) {
      console.log('String length is 1: ', message);
      return;
    }

    let starHold: number;
    let lineHold: number;
    for (let j = 0; j < message.length; j++) {
      this.formattedArray[j] = message[j];
      if (message[j] === '*') {
        starHold = this.findTags(message, starHold, '*', j);
        console.log(starHold, j);
      }
      if (message[j] === '_') {
        lineHold = this.findTags(message, lineHold, '_', j);
        console.log(lineHold, j);
      }
    }

    return this.formattedArray.join('');
  }

  findTags(message, hold, starOrLine, index) {
    if (typeof hold === 'undefined') {
      hold = this.findStartTag(index, message, starOrLine);
    } else {
      if (((index + 1) === message.length) || message[index + 1] === ' ' || message[index + 1] === starOrLine) {
        const tag = starOrLine === '*' ? 'strong' : 'i';
        this.formattedArray[hold] = `<${tag}>`;
        this.formattedArray[index] = `</${tag}>`;
        hold = undefined;
      }
    }
    return hold;
  }

  findStartTag(index, message, starOrLine) {
    let hold: number;
    if (index === 0) {
      if (message[index + 1] !== ' ') {
        hold = index;
      }
    } else if (message[index + 1] !== ' ' && message[index - 1] !== starOrLine) {
      hold = index;
    }
    return hold;
  }
}
