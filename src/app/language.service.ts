import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  german: boolean;
  english: boolean;

  constructor() {
    this.german = true;
    this.english = false;
   }

   selectGerman() {
    this.german = true;
    this.english = false;
  }

  selectEnglish() {
    this.german = false;
    this.english = true;
  }
}
