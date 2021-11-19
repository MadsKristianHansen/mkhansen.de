import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mkhansen';

  @Input() german: boolean;
  @Input() english: boolean;

  constructor(public router: Router) {

    this.german = true;
    this.english = false;
  }
}
