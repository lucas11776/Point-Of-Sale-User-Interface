import { Validators } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import { Form } from '../../logic/form';

export class LoginForm extends Form {
    protected rules(): object {
        return {
            'email': [this.data('email'), [
              Validators.required,
              Validators.email,
              RxwebValidators.email(),
            ]],
            'password': [this.data('password'), [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
            ]],
        };
    }
}