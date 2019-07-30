import { Component, ErrorHandler } from '@angular/core';
import { callbackify } from 'util';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Welcome to your login space';

/*
  espaceSignIn = "Login form SignIn";
  espaceSignOut = "Login form SignOut";
  espaceSignUp = "Login form SignUp";
*/ 

  // nouvel object de type date
  // lastUpdate = new Date();
  // création d'une promesse
  lastUpdate = new Promise((resolve,reject) => {
      const date = new Date();
      setTimeout(
        () => {
        resolve(date);
      }, 2000
    );
  });

  espaces = [
    {
      name: "SignIn",
      login: "Login form SignIn"
    },

    {
      name: "SignOut",
      login: "Login form SignOut"
    },

    {
      name: "SignUp",
      login: "Login form SignUp"
    },

  ];



}