import { Validators } from '@angular/forms';

import { Form } from './form';

describe('Form.', () => {
    let _form: Form;
    const data = {'name': 'Test', 'email': 'test@mail.com'};

    beforeEach(() => {
        _form = new class RegisterForm extends Form {
            protected rules(): object {
                return {
                    'name': [this.data('name'), [Validators.required]],
                    'email': [this.data('email'), [Validators.required, Validators.email]],
                }
            }
        };
    });

    it('Should check if form created', () => {
        expect(_form instanceof Form).toBeTruthy();
    });

    it('Should check form is valid if form is invalid and not dirty.', () => {
        expect(_form.invalid()).toBeTruthy();
    });

    it('Should check if form is invalid if form is dirty and invalid.', () => {
        _form.form.markAsDirty();
        expect(_form.invalid()).toBeTruthy();
    });

    it('Should check if form control is invalid if it`s dirty and invalid.', () => {
        _form.form.controls.name.markAsDirty();
        expect(_form.invalid('name')).toBeTruthy();
    });

    it('Should check if form data is equal to the set form data.', () => {
        _form.form.markAsDirty();
        _form.set(data);
        expect(_form.invalid()).toBeFalsy();
        expect(_form.valid()).toBeTruthy();
        expect(_form.valid('email')).toBeTruthy();
        expect(_form.form.value).toEqual(data);
    });

    it('Should get form controls.', () => {
        expect(_form.controls()).toEqual(_form.form.controls);
    });

    it('Should get form email control.', () => {
        expect(_form.control('email')).toEqual(_form.form.controls.email);
    });

    it('Should get first name form control errors.', () => {
        expect(_form.errors('name')).toEqual(_form.form.controls.name.errors);
    });

    it('Should rest form to origal state.', () => {
        _form.set(data);
        _form.control('name').setValue('developer');
        expect(_form.form.value.name).not.toEqual(data.name);
        _form.reset();
        expect(_form.form.value.name).toEqual(data.name);
    });
});