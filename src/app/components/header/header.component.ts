import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor() { }

  // Observeur
  secondes: number;
  // Souscription pour éviter les buggs des Observables (compteur)
  counterSubscription: Subscription;

  ngOnInit() {

    // Observable
    const counter = Observable.interval(1000);
      counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error: any) => {
          console.log('Une erreur a été détecté !');
        },
        () => {
          console.log('Observable complétée !')
        }
      );

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      }
    );
  }

  // La fonction  unsubscribe()  détruit la souscription à l'Observable, et empêche les comportements infinis, donc n'oubliez pas de unsubscribe !
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
