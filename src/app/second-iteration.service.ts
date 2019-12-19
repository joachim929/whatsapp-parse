import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondIterationService {
  mess = '*Test test*' + // bold
    ' *t*e*s*t *test*' + // bold
    '*test* ' + // not bold
    '*t* *e*'; // bold

  /**
   * todo:
   *  find fix for `*test**test*`
   */

  constructor() {
  }

  spacingMethod() {
    const formattedString = [];

    let holding: number;
    if (this.mess.length < 2) {
      console.log('String length is 1: ', this.mess);
      return;
    }

    let tHold: number;
    const tArr = [];
    for (let j = 0; j < this.mess.length; j++) {
      tArr[j] = this.mess[j];
      if (this.mess[j] === '*') {
        if (typeof tHold === 'undefined') {
          if (this.mess[j + 1] !== ' ') {
            tHold = j;
          }
        } else {
          if (this.mess[j - 1] !== ' ' && ((j + 1 === this.mess.length) || this.mess[j + 1] === ' ')) {
            tArr[tHold] = '<strong>';
            tArr[j] = '</strong>';
            tHold = undefined;
          }
        }
      }
    }
    console.log(tArr.join(''));

    // for (let i = 0; i < this.mess.length; i++) {
    //   formattedString[i] = this.mess[i];
    //   if (this.mess[i] === '*') {
    //     if (i === 0) {
    //       if (!this.isStarOrSpace(this.mess[i + 1])) {
    //         holding = i;
    //         console.log('holding at ', i);
    //       }
    //     } else if (i === this.mess.length - 1) {
    //       if ((Number(holding) > -1) && !this.isStarOrSpace(this.mess[i - 1])) {
    //         formattedString[holding] = '<strong>';
    //         formattedString[i] = '</strong>';
    //       }
    //     } else {
    //
    //       if (typeof holding !== 'undefined' && this.mess[i + 1] !== ' ') {
    //         formattedString[holding] = '<strong>';
    //         formattedString[i] = '</strong>';
    //         holding = undefined;
    //         continue;
    //       }
    //       if (this.isStarOrSpace(this.mess[i + 1]) && !this.isStarOrSpace(this.mess[i - 1])) {
    //         if (typeof holding !== 'undefined') {
    //           console.log('setting');
    //           formattedString[holding] = '<strong>';
    //           formattedString[i] = '</strong>';
    //           holding = undefined;
    //         } else {
    //           holding = i;
    //         }
    //       }
    //       if (typeof holding === 'undefined' && !this.isStarOrSpace(this.mess[i + 1])) {
    //         holding = i;
    //       }
    //     }
    //   }
    // }

    // console.log(formattedString.join(''));
    return formattedString.join('');
  }

  isStarOrSpace(char) {
    const equalToSpace = char === ' ';
    const equalToStar = char === '*';
    return equalToSpace || equalToStar;
  }
}
