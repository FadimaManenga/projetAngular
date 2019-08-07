import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { EspaceService } from './components/services/espace.service';

import { AuthComponent } from './components/auth/auth.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { AuthService } from './components/services/auth.service';
import { LoginSingleComponent } from './components/login-single/login-single.component';
import { Error404Component } from './components/error404/error404.component';
import { AuthGuard } from './components/services/auth-guard.service';
import { LoginFormComponent } from './components/login-form/login-form.component';



const appRoutes: Routes = [
  {path: 'logins', canActivate:[AuthGuard], component: LoginViewComponent},
  {path: 'logins/:id', canActivate:[AuthGuard], component: LoginSingleComponent},
  {path: 'form', canActivate: [AuthGuard], component: LoginFormComponent},
  {path: 'auth', component: AuthComponent},
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
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    EspaceService,
    AuthService,
    AuthGuard
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
