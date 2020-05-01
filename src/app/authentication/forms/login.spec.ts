import { LoginForm } from "./login.form";
import { Form } from "../../logic/form";


describe('Login Form', () => {
    let _form: Form;
    let credetials;

    beforeEach(() => {
        _form = new LoginForm();
        credetials = {
            'email': 'thembangubeni04@gmail.com',
            'password': 'password123'  
        };
    });

    it('Should check login form is invalid if data not filled.', () => {
        expect(_form.invalid()).toBeTruthy();
        expect(_form.valid()).toBeFalsy();
    });

    it('Shloud check if form is valid is correct data is filled.', () => {
        _form.set(credetials);
        expect(_form.invalid()).toBeFalsy();
        expect(_form.valid()).toBeTruthy();
    });
});