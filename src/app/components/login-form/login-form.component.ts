import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EspaceService } from '../services/espace.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  defaultInactif = 'Inactif';

  constructor(private espaceService: EspaceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const login = form.value['login'];
    this.espaceService.addEspace(name, login);
    this.router.navigate(['/logins']);
  }
  
}
