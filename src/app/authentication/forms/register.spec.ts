import { RegisterForm } from "./register.form";
import { Form } from "../../logic/form";
import { RegisterMock } from '../mocks/register.mock';
import { Register } from '../../models/authentication.interface';

describe('RegisterForm', () => {
    let _form: Form;
    let data: Register;

    beforeEach(() => {
        _form = new RegisterForm();
        data = RegisterMock();
    });

    it('Should check if register form is invalid is data is not filled.', () => {
        expect(_form.invalid()).toBeTruthy();
    });

    it('Should check if register form is valid if form data is filled.', () => {
        _form.set(data); 
        _form.control('password_confirmation').updateValueAndValidity();
        expect(_form.valid()).toBeTruthy();
    });

    it('Should check if first_name is invalid if it has min of 3 charactors.', () => {
        data['first_name'] = 'Th';
        _form.set(data);
        _form.control('first_name').markAsDirty();
        expect(_form.invalid('first_name')).toBeTruthy();
    });

    it('Should check if first_name is invalid if it has min of 3 charactors.', () => {
        data['last_name'] = 'Ng';
        _form.set(data);
        _form.control('last_name').markAsDirty();
        expect(_form.invalid('last_name')).toBeTruthy();
    });

    it('Should check if email is invalid if incorrect email address is entered.', () => {
        data['email'] = 'themba.com';
        _form.set(data);
        _form.control('email').markAsDirty();
        expect(_form.invalid('email')).toBeTruthy();
    });

    it('Should check if password is invalid is password has min of 8 charactors.', () => {
        data['password'] = 'passwor';
        _form.set(data);
        _form.control('password').markAsDirty();
        expect(_form.invalid('password')).toBeTruthy();
    });

    it('Should check if password_confirmation is invalid is it does on match password.', () => {
        data['password'] = 'test1234';
        _form.set(data);
        _form.control('password_confirmation').markAsDirty();
        expect(_form.invalid('password_confirmation')).toBeTruthy();
    });
});