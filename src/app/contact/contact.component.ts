import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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
