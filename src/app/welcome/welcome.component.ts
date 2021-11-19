import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public ls: LanguageService) { 
  }

  ngOnInit(): void {
  }

}
