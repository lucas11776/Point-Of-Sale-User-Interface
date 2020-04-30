import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent ,children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
