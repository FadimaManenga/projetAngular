import { Component, OnInit, Input } from '@angular/core';
import { EspaceService } from '../services/espace.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /*
  @Input() formsignin: string;
  @Input() formsignout: string;
  @Input() formsignup: string;
  */

  // formtitle = "Login form";
  @Input() formtitle: string;
  // info = "complete this login form";
  @Input() info: string;
  // index 
  @Input() indexLogin: number;
  // id
  @Input() id: number;

  clicked = false;

  message = "Your connexion hab been successfull ! You'll be send to your workpeace.";

  constructor(private espaceService: EspaceService) {
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
    //confirm(this.message);
    console.log(this.message);
  }

  getColor() {
    if (this.clicked) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onActifOne() {
    this.espaceService.actifOne(this.indexLogin);
    confirm(this.message);
  }

  onInactifOne() {
    this.espaceService.inactifOne(this.indexLogin);
  }
}
