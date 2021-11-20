import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
   
  

  constructor(public ls: LanguageService) { 
  console.log('German language?', this.ls.german);
  }

  ngOnInit(): void {
  }

}
