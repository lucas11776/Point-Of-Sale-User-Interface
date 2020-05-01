import { Login } from 'src/app/models/authentication';

export class LoginMock {
    constructor() {
        return <Login>{
            'email': 'thembangubeni04@gmail.com',
            'password': 'password'  };
    }
}

export class LoginMockResponse {
    constructor() {
        return { };
    }
}

export class LoginMockFailed { 
    constructor() {
        return {
            message: 'Failed to login invalid credentials.',
            data: {
                'email': 'The email address is invalid.',
                'password': 'Password to short.'
            }
        };
    }
}