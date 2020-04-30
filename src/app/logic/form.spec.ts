import { Validators } from '@angular/forms';

import { Form } from './form';

describe('Form class extender.', () => {
    let _form: Form;
    const data = {'name': 'developer', 'email': 'developer@gmail.com'};

    beforeEach(() => {
        _form = new class RegisterForm extends Form {
            protected rules() {
                return {
                    'name': [this.data('name'), [Validators.required]],
                    'email': [this.data('email'), [Validators.required, Validators.email]],
                }
            }
        }
    });

    it('Should check if form is invalid if form is first initialized with out data.', () => {
        expect(_form.invalid()).toBeTruthy();
    });

    it('Should check if form is invalid if form is dirty and invallid.', () => {
        _form.form.markAsDirty();
        expect(_form.invalid()).toBeTruthy();
    });

    it('Should check if form control is invalid if form is dirty and invalid.', () => {
        _form.form.controls.name.markAsDirty();
        expect(_form.invalid('name')).toBeTruthy();
    });

    it('Should check if form value is empty to the date we pass to form.', () => {
        _form.form.markAsDirty();
        _form.set(data);
        expect(_form.form.value).toEqual(data);
    });

    it('Should get form email control.', () => {
        expect(_form.control('email')).toEqual(_form.form.controls.email);
    });
});