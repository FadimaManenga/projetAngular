import { Component, ErrorHandler } from '@angular/core';
import { callbackify } from 'util';

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