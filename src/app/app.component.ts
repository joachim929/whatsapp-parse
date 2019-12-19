import {Component} from '@angular/core';
import {FirstIterationService} from './first-iteration.service';
import {SecondIterationService} from './second-iteration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whatsapp-parser';

  testString = '*Test test*' + // bold
    ' *t*e*s*t *test*' + // bold
    '*test* ' + // not bold
    '*t* *e*'; // bold

  formattedString: string;

  constructor(
    private firstService: FirstIterationService,
    private secondService: SecondIterationService
  ) {
    // console.log(this.firstService.indexTest(this.testString));
    this.formattedString = this.secondService.spacingMethod();
  }
}
