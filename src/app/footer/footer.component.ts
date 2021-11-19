import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() german: boolean;
  @Input() english: boolean;


  constructor(public ls: LanguageService) { 
    this.german = true;
    this.english = false;
  }

  ngOnInit(): void {
  }

}
