import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondIterationService {
  mess = '*Test test*' + // bold
    ' *t*e*s*t *test*' + // bold
    '*test* ' + // not bold
    '*t* *e*'; // bold

  constructor() {
  }

  spacingMethod() {
    const formattedString = [];

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
          if (j === 0) {
            if (this.mess[j + 1] !== ' ') {
              tHold = j;
            }
          } else if (this.mess[j + 1] !== ' ' && this.mess[j - 1] !== '*') {
            tHold = j;
          }
        } else {
          if (((j + 1) === this.mess.length) || this.mess[j + 1] === ' ' || this.mess[j + 1] === '*') {
            tArr[tHold] = '<strong>';
            tArr[j] = '</strong>';
            tHold = undefined;
          }
        }
      }
    }
    console.log(tArr.join(''));

    return tArr.join('');
  }
}
