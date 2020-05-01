import { Component } from '@angular/core';
import { LoginForm } from '../../forms/login.form';

@Component({
  selector: 'pos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginForm {
  constructor() {
    super();
  }
}
