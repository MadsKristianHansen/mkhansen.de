import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public ls: LanguageService) { }

  ngOnInit(): void {
  }
  
  foo = false;
  highlight = false;
  cool = false;
 
  onInViewportChange(inViewport: boolean) {
    
    setTimeout(() => {
      this.foo = inViewport;
      this.highlight = inViewport;
      this.cool = inViewport;
    }, 2000)
  }

}
