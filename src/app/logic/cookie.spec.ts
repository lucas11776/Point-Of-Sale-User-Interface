import { Cookie } from './cookie';
import { TokenMock } from '../authentication/mocks/token.mock';
import { Token } from '../authentication/models/token.model';

describe('Cookie', () => {
    let _cookie: Cookie;
    let token: Token;
    let date: Date;

    beforeEach(() => {
        _cookie = new Cookie;
        token = TokenMock();
        date = new Date();
        date.setTime(date.getTime() + (1000 * token.expire));
    })

    afterEach(() => {
        _cookie.unset('authorization');
        _cookie.unset('role');
    });

    it('should check if cookie is created', () => {
        expect(_cookie).toBeTruthy();
    });

    it('should set authorization cookie.', () => {
        _cookie.set('authorization', token.token, date);
        expect(_cookie.get('authorization')).toEqual(token.token);
    });

    it('should unset authorization cookie.', () => {
        _cookie.set('authorization', token.token, date);
        _cookie.unset('authorization');
        expect(_cookie.get('authorization')).toBe('');
    });

    it('should get all cookies.', () => {
        let cookies = { authorization: token.token, role: 'developer' };
        _cookie.set('authorization', cookies.authorization, date);
        _cookie.set('role', cookies.role, date);
        expect(_cookie.all()).toEqual(cookies);
    });
});