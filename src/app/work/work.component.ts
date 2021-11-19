import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  showDetails1: boolean;
  showDetails2: boolean;
  showDetails3: boolean;
  showDetails4: boolean;

  showAll: boolean;
  showAngular: boolean;
  showJavaScript: boolean;
  constructor(public ls: LanguageService) { 
    this.showDetails1 = false;
    this.showDetails2 = false;
    this.showDetails3 = false;
    this.showDetails4 = false;
    this.showAll = true;
    this.showAngular = false;
    this.showJavaScript = false;
  }

  ngOnInit(): void {
  }

  showAllProjects() {
    this.showAll=true; 
    this.showAngular=true;
    this.showJavaScript=true;
  }

  showAngularProjects() {
    this.showAll=false; 
    this.showAngular=true;
    this.showJavaScript=false;
  }

  showJavaScriptProjects() {
    this.showAll=false; 
    this.showAngular=false;
    this.showJavaScript=true;
  }

}
