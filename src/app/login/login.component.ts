import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //formtitle = "Login form";
 @Input() formtitle: string;
  /*
  @Input() formsignin: string;
  @Input() formsignout: string;
  @Input() formsignup: string;
  */
  
  //info = "complete this login form";
  @Input() info: string;

  clicked = false;
  
  message = "Your connexion hab been successfull ! You'll be send to your workpeace.";
  
  constructor() {
    setTimeout(
      () => {
        this.clicked = true;
      }, 5000
    );
  }
  
  information() {
    return this.info;
  }
 
onBtClick() { 
      confirm(this.message);
      console.log(this.message);
  }

getColor(){
if (this.clicked) {
  return 'green'; 
} else {
  return 'red';
}
}


 

}
