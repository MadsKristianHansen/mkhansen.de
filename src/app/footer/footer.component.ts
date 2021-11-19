import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() german: boolean;
  @Input() english: boolean;


  constructor() { 
    this.german = true;
    this.english = false;
  }

  ngOnInit(): void {
  }

}
