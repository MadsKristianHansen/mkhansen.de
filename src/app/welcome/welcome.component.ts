import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() german: boolean;
  @Input() english: boolean;


  constructor() { 
    this.german = true;
    this.english = false;
  }

  ngOnInit(): void {
  }

}
