import { Validators } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import { Form } from '../../logic/form';

export class RegisterForm extends Form {
    protected rules() {
        return {
            'first_name': [this.data('first_name'), [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50),
            ]],
            'last_name': [this.data('last_name'), [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(50),
            ]],
            'email': [this.data('email'), [
              Validators.required,
              RxwebValidators.email(),
            ]],
            'password': [this.data('password'), [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
            ]],
            'password_confirmation': [this.data('password_confirmation'), [
              RxwebValidators.compare({fieldName:'password'}),
            ]]
        }
    }
}