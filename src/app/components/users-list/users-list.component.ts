import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  //  array de type User (à importer)
  users: User[];
  userSubcription: Subscription;

  // injection du user.service
  constructor(private userService: UserService) { }

  // subcription dans le userService
  ngOnInit() {
    this.userSubcription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }
  // au moment de la destruction du component
  ngOnDestroy() {
    this.userSubcription.unsubscribe();
  }
}
