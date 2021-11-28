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
  sendMailUrl: string;
  credentials = {name: '', email: '', message: ''};

  constructor(public ls: LanguageService) {
    this.mailsuccess = false;
    this.sendMailUrl = 'http://mads-kristian-hansen.developerakademie.com/mkhansen/send_mail.php';
   }

  ngOnInit(): void {
  }

  //senden() {
    //this.mailsuccess = true;
    //return false;
  //}

  senden() {
    let formData = new FormData()
      formData.append('name', this.credentials.name);
      formData.append('email', this.credentials.email);
      formData.append('message', this.credentials.message);

    fetch(this.sendMailUrl, {
      method: "POST",
      body: formData
    });
    return false;
  }

  goback() {
    this.mailsuccess = false;
  }

}
