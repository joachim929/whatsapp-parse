import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstIterationService {

  constructor() {
  }

  indexTest(unFormattedString: string): string {
    const str = unFormattedString;
    const indexArr = [];
    const formattedArray = [];
    for (let i = 0; i < str.length; i++) {
      formattedArray.push(str[i]);
      if (str[i] === '*') {
        indexArr.push(i);
      }
    }

    let closeCheck = false;
    for (let x = 0; x < indexArr.length; x++) {
      if (closeCheck === false) {
        formattedArray[indexArr[x]] = '<strong>';
        closeCheck = true;
      } else {
        // if ((x + 1) === indexArr.length) {
        //   console.log(x);
        // }
        if (indexArr[x] + 1 <= formattedArray.length) {
          if (formattedArray[indexArr[x] + 1] === ' ' || formattedArray[indexArr[x] + 1] === '*') {
            formattedArray[indexArr[x]] = '</strong>';
            closeCheck = false;
          }
        }
      }
    }

    return formattedArray.join('');
  }
}
