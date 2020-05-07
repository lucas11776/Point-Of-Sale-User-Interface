import { Register } from '../models/register.model';

export let RegisterMock = (): Register => {
    return {
        'first_name': 'Themba Lucas',
        'last_name': 'Ngubeni',
        'email': 'thembangubeni04@gmail.com',
        'password': 'password',
        'password_confirmation': 'password'
    };
}
