import { stringify } from '@angular/compiler/src/util';

// Création du profil utilisateur
export class User {

    /* methode javaScript
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    */

    // methode typeScript + simple
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public drinkPreference: string,
        public hobbies?: string[]
    ) { }
}