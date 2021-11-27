import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('3.5s ease', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(public ls: LanguageService) { 
  }

  ngOnInit(): void {
  }

}
