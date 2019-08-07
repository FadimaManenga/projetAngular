import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// implémentatin de OnInit dans la déclaration de classe
export class AppComponent implements OnInit {
 
  title = 'Welcome to angular SPA';
  constructor() {};

  ngOnInit() {}

}