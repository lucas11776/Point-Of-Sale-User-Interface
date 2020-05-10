import { Login } from '../models/login.model';


export let LoginMock = (): Login => {
    return {
        'email': 'thembangubeni04@gmail.com',
        'password': 'password'
    };
};


export let LoginFailedMock = (): {message:string, errors:Login} => {
    return {
        message: 'Someting went wrong when trying to login.',
        errors: {
            email: 'The email has been change 2 weeks ago',
            password: 'This password has been change 2 day ago.'
        }
    }
}