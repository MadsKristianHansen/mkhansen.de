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
  name = '';
  email = '';
  message = '';
  sendMailUrl;
  

  constructor(public ls: LanguageService) {
    this.mailsuccess = false;
    this.name = this.name;
    this.email = this.email;
    this.message = this.message;
    this.sendMailUrl = 'https://www.mkhansen.de/send_mail.php';
   }

  ngOnInit(): void {
  }

  senden() {
    let formData = new FormData()
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

    fetch(this.sendMailUrl, {
      method: "POST",
      body: formData
    })

    this.mailsuccess = true;
    return false;
    
  }

  goback() {
    this.mailsuccess = false;
  }

}
