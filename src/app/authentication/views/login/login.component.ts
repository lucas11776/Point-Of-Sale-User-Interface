import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxwebValidators as Validators, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'pos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private _formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      'email': [null, [
        Validators.required,
        Validators.email,
      ]],
      'password': [null, [
        Validators.required,
        Validators.minLength({value: 8}),
        Validators.maxLength({value: 20}),
      ]],
    });
  }

  login() {
    console.info(this.form.value);
  }
}
