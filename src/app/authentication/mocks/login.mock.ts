import { Login } from 'src/app/models/authentication.interface';

export class LoginMock {
    constructor() {
        return <Login> {
            'email': 'thembangubeni04@gmail.com',
            'password': 'password'
        };
    }
}