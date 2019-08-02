import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";


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

const appRoutes: Routes = [
  {path: 'logins', canActivate:[AuthGuard], component: LoginViewComponent},
  {path: 'logins/:id', canActivate:[AuthGuard], component: LoginSingleComponent},
  {path: 'auth', component: AuthComponent},
  //{path: '', component: LoginViewComponent},
  {path: '', component: AuthComponent},
  {path: 'not-found', component: Error404Component},
  {path: '**', redirectTo: '/not-found'} // essentiel que ce soit à la fin des constantes
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
    Error404Component
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
export class AppModule { }
