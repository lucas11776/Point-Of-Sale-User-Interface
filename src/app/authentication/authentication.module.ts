import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LogoutComponent
  ]
})
export class AuthenticationModule { }
