import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('1s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ContactComponent implements OnInit {

  mailsuccess: boolean;

  constructor(public ls: LanguageService) {
    this.mailsuccess = false;
   }

  ngOnInit(): void {
  }

  senden() {
    this.mailsuccess = true;
    return false;
  }

  goback() {
    this.mailsuccess = false;
  }

}
