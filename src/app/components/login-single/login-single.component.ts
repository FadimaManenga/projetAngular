import { Component, OnInit } from '@angular/core';
import { EspaceService } from "../services/espace.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-single',
  templateUrl: './login-single.component.html',
  styleUrls: ['./login-single.component.scss']
})
export class LoginSingleComponent implements OnInit {
  name: string = 'Login form';
  login: string = 'login';

  //constructor(private espaceService : EspaceService) {}
  constructor(private espaceService: EspaceService, private route: ActivatedRoute) {}

  ngOnInit() {
    //this.name = this.route.snapshot.params['id'];
    
    const id = this.route.snapshot.params['id'];
    this.name = this.espaceService.getEspaceById(+id).name;
    this.login = this.espaceService.getEspaceById(+id).login;
    
  }

}
