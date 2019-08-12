import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginSingleComponent } from './components/login-single/login-single.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/services/auth-guard.service';
import { AuthService } from './components/services/auth.service';
import { EspaceService } from './components/services/espace.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserService } from './components/services/user.service';
import { NewUserComponent } from './components/new-user/new-user.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  {path: 'logins', canActivate:[AuthGuard], component: LoginViewComponent},
  {path: 'logins/:id', canActivate:[AuthGuard], component: LoginSingleComponent},
  {path: 'form', canActivate: [AuthGuard], component: LoginFormComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: '', component: LoginViewComponent},
  {path: 'not-found', component: Error404Component},
  {path: '**', redirectTo: '/not-found'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AuthComponent,
    LoginViewComponent,
    LoginSingleComponent,
    Error404Component,
    LoginFormComponent,
    UsersListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    

  ],
  providers: [
    EspaceService,
    AuthService,
    AuthGuard,
    UserService

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
