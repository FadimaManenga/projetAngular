import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  // FormGroup = object formulaire qui correspondra au formulaire dans le template

  userForm: FormGroup;
  // injection dans le constructor d'un outil qui s'appelle FormBuilder qui permet de créer des FormGroup plus simplement et plus lisible.
  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router) { }


  // méthode d'initiation du formulaire exécutée dans ngOnInit
  ngOnInit() {
    this.initForm();
  }
  // initiation du formulaire, avec les différents formControles (champs)
  // Validators.required = champ requis
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
getHobbies() {
return this.userForm.get('hobbies') as FormArray;
}
onAddHobby() {
  const newHobbyControl = this.formBuilder.control('', Validators.required);
  this.getHobbies().push(newHobbyControl);
}
}
