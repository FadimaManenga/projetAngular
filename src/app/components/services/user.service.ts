import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
{
firstName: 'James',
lastName: 'Smith',
email: 'james@smith.com',
drinkPreference: 'coca',
hobbies: [
    'coder',
    'la dégustation de café'
]

}


    ]; // importation du model User sous forme de tableau vide, par défaut
    userSubject = new Subject<User[]>(); // patherne Subject, qui émettra des array objets de type User[]

  // méthode permettant d'émettre une copie de l'array User : .slide()
   emitUsers(){
       this.userSubject.next(this.users.slice()); 
   } 

   // methode permettant d'ajouter un objet User
    addUser(user : User){
        this.users.push(user);// push du user sur l'array private user: User[]
        this.emitUsers();
    }
}