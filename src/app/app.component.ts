import { Component, OnInit } from '@angular/core';

import { EspaceService } from './components/services/espace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// implémentatin de OnInit dans la déclaration de classe
export class AppComponent implements OnInit {
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
/*
// couper/coller le tab espaces dans espaces.service.ts
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
*/
// créer un tableau vide de type any pour le fonct de l'application
espaces: any[];
// injection du service dans le constructeur
constructor(private espaceService: EspaceService) {};
//implémentation de la méthode ngOnInit pour la recherche de données
// elle doit être exécuter au moment de la création du component par Angular, et après l'exécution du constructor
ngOnInit() {
  this.espaces = this.espaceService.espaces;
}

etatActif() {
  this.espaceService.Actif();
}

etatInactif() {
  this.espaceService.Inactif();
}


}