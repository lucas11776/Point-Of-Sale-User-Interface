import { RegisterForm } from "./register.form";
import { Form } from "../../logic/form";

describe('Register Form Validation Rules', () => {
    let _form: Form;
    let data;

    beforeEach(() => {
        _form = new RegisterForm();
        data = {
            'first_name': 'Themba Lucas',
            'last_name': 'Ngubeni',
            'email': 'thembangubeni04@gmail.com',
            'password': 'password',
            'password_confirmation': 'password'
        };
    });

    it('Should check if for is invalid if it not filled.', () => {
        expect(_form.invalid()).toBeTruthy();
    });

    it('Shloud check if form is valid is correct data is filled.', () => {
        _form.set(data);
        expect(_form.valid).toBeTruthy();
    });

});