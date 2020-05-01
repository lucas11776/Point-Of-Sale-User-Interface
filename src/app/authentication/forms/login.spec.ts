import { LoginForm } from "./login.form";
import { Form } from "../../logic/form";
import { LoginMock } from '../mocks/login.mock';

describe('Login Form', () => {
    let _form: Form;
    let credentials: object;

    beforeEach(() => {
        _form = new LoginForm();
        credentials = new LoginMock();
    });

    it('Should check if login form is invalid in data is not filled.', () => {
        expect(_form.invalid()).toBeTruthy();
        expect(_form.valid()).toBeFalsy();
    });

    it('Should check if login form is valid is data is filled.', () => {
        _form.set(credentials);
        expect(_form.invalid()).toBeFalsy();
        expect(_form.valid()).toBeTruthy();
    });

    it('Should check if email is invalid if invalid email address is entered.', () => {
        credentials['email'] = 'test#mail.co.za'
        _form.set(credentials);
        _form.control('email').markAsDirty();
        expect(_form.invalid('email')).toBeTruthy();
    });

    it('Should check if password is invalid is short password is enterd with charactors less then 8.', () => {
        credentials['password'] = 'passwor'
        _form.set(credentials);
        _form.control('password').markAsDirty();
        expect(_form.invalid('password')).toBeTruthy();
    });
});