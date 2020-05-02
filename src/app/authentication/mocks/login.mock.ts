import { Login } from 'src/app/models/authentication';

export class LoginMock {
    constructor() {
        return <Login> {
            'email': 'thembangubeni04@gmail.com',
            'password': 'password'
        };
    }
}