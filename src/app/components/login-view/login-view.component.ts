import { Component, OnInit } from '@angular/core';
import { EspaceService} from '../services/espace.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  
// couper/coller le contenu 

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
  /*
  // créer un tableau vide de type any pour le fonct de l'application
  espaces: any[];
*/
  // injection du service dans le constructeur
  constructor(private espaceService: EspaceService) {};

  //implémentation de la méthode ngOnInit pour la recherche de données
  // elle doit être exécuter au moment de la création du component par Angular, et après l'exécution du constructor
  ngOnInit() {
    this.espaces = this.espaceService.espaces;
  }
  /*
  etatActif() {
    this.espaceService.Actif();
  }
  
  etatInactif() {
    this.espaceService.Inactif();
  }
  */
}
