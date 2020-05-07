import { LoginForm } from "./login.form";
import { LoginMock } from '../mocks/login.mock';

describe('LoginForm', () => {
    let _form: LoginForm;

    beforeEach(() => {
        _form = new LoginForm();
    });
    
    it('Should check if login form is invalid in data is not filled.', () => {
        expect(_form.invalid()).toBeTruthy();
        expect(_form.valid()).toBeFalsy();
    });

    it('Should check if login form is valid is data is filled.', () => {
        _form.set(LoginMock());
        expect(_form.valid()).toBeTruthy();
    });

    it('Should check if email is invalid if invalid email address is entered.', () => {
        let login = LoginMock;
        login['email'] = 'test#mail.co.za'
        _form.set(LoginMock);
        _form.control('email').markAsDirty();
        expect(_form.invalid('email')).toBeTruthy();
    });

    it('Should check if password is invalid is short password is enterd with charactors less then 8.', () => {
        let login = LoginMock;
        login['password'] = 'passwor'
        _form.set(login);
        _form.control('password').markAsDirty();
        expect(_form.invalid('password')).toBeTruthy();
    });
});