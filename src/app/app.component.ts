import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsapp-parser';

  mess = '_Test test_' + // bold
    ' *t*e*s*t *test*' + // bold
    '*test* ' + // not bold
    '_*a*_';

  formattedString: string;

  constructor(
  ) {
  }
}
