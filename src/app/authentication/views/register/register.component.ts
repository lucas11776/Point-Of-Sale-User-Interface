import { Component } from '@angular/core';

import { RegisterForm } from '../../forms/register.form';

@Component({
  selector: 'pos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends RegisterForm {
  constructor() {
    super();
  }
}
