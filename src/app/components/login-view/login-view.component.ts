import { Component, OnInit } from '@angular/core';
import { EspaceService} from '../services/espace.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  title = 'Welcome to angular SPA';

lastUpdate = new Promise((resolve, reject) => {
  const date = new Date();
  setTimeout(
    () => {
      resolve(date);
    }, 2000
  );
});
  
  // créer un tableau vide de type any pour le fonct de l'application
  espaces: any[];
  espaceSubscription: Subscription;
  isAuth: boolean;

  // injection du service dans le constructeur
  constructor(private espaceService: EspaceService) {
    setTimeout(
      () => {
        this.isAuth = true;
    }, 4000
    );
  };

  //implémentation de la méthode ngOnInit pour la recherche de données
  // elle doit être exécuter au moment de la création du component par Angular, et après l'exécution du constructor
  ngOnInit() {
    //this.espaces = this.espaceService.espaces;
   this.espaceSubscription = this.espaceService.espaceSubject.subscribe(
     (espaces:any[]) => {
       this.espaces = espaces;
     }
   );
   this.espaceService.emitEspaceSubject();
    
  }
  etatActif() {
    this.espaceService.actifAll();
  }

  etatInactif() {
    this.espaceService.inactifAll();
  }
}
