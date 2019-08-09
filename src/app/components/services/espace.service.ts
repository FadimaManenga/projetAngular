import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';

@Injectable()
export class EspaceService {
    //espaces = [
    espaceSubject = new Subject<any[]>();
    private espaces = [];

    constructor(private httpClient: HttpClient) { }

    // slice = copie du tableau
    emitEspaceSubject() {
        this.espaceSubject.next(this.espaces.slice());
    }

    getEspaceById(id: number) {
        const espace = this.espaces.find(
            (espaceObject) => {
                return espaceObject.id === id;
            }
        );
        return espace;
    }

    actifAll() {
        for (let espace of this.espaces) {
            espace.login = 'Actif';
            //confirm("Your connexion hab been successfull ! You'll be send to your workpeace.")
        }
        this.emitEspaceSubject();
    }
    inactifAll() {
        for (let espace of this.espaces) {
            espace.login = 'Inactif'
        }
        this.emitEspaceSubject();
    }

    actifOne(index: number) {
        this.espaces[index].login = "Actif";
        this.emitEspaceSubject();

    }
    inactifOne(index: number) {
        this.espaces[index].login = "Inactif";
        this.emitEspaceSubject();
    }
    // création de l'object espace
    // La ligne pour l'id prend l'id du dernier élément actuel de l'array et ajoute 1
    // Ensuite, l'objet complété est ajouté à l'array et le Subject est déclenché pour tout garder à jour.
    addEspace(name: string, login: string) {
        const espaceObject = {
            id: 0,
            name: '',
            login: ''
        };
        espaceObject.name = name;
        espaceObject.login = login;
        espaceObject.id = this.espaces[(this.espaces.length - 1)].id + 1; this.espaces.push(espaceObject);
        this.emitEspaceSubject();
    }

    saveEspacesToServe() {
        this.httpClient
            /*  la méthode post() ajoute les mm données sauvegardées
            .post('https://projetangular1419.firebaseio.com/espaces.json', this.espaces)
            */
            // la méthode put() écrase les mm données sauvegardées
            .put('https://projetangular1419.firebaseio.com/espaces.json', this.espaces)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé');
                },
                (error) => {
                    console.log('Erreur  de sauvegarde ! : ' + error);
                }
            );
    }

    getEspacesFromServer() {

        this.httpClient
            .get<any[]>('https://projetangular1419.firebaseio.com/espaces.json')
            .subscribe(
                (response) => {
                    this.espaces = response;
                    this.emitEspaceSubject();
                },
                (error) => {
                    console.log('Erreur de chargement ! ' + error);
                }
            )
    }



}
