import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

export class EspaceService {
    espaces = [
        {
            id:1,
            name: "SignIn",
            login: "Actif"
        },
        {
            id:2,
            name: "SignOut",
            login: "Inactif"
        },
        {
            id:3,
            name: "SignUp",
            login: "Inactif"
        },
    ];

    getEspaceById(id:number){
        const espace = this.espaces.find(
            (espaceObject) => {
                return espaceObject.id === id;
            }
        );
        return espace;
    }

    Actif() {
        for (let espace of this.espaces) {
            espace.login = 'Actif';
            confirm("Your connexion hab been successfull ! You'll be send to your workpeace.")
        }
    }
    Inactif() {
        for (let espace of this.espaces) {
            espace.login = 'Inactif'
        }
    }

    switchOnOne(index: number) {
        this.espaces[index].login = "Actif";

    }
    switchOffOne(index: number) {
        this.espaces[index].login = "Inactif";
    }


}
