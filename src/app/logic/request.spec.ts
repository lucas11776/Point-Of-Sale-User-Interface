import { Request } from './request';

describe('Request', () => {
    let _request: Request;

    beforeEach(() => {
        _request =  new Request;
    });

    it('should check if request is created.', () => {
        expect(_request).toBeTruthy();
    });
});