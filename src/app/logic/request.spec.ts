import { Request } from './request';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fakeAsync, tick } from '@angular/core/testing';

describe('Request', () => {
    let _request: Request;
    let data: {};

    beforeEach(() => {
        _request =  new Request;
        data = {'id': 1, 'name': 'Lucas'};
    });

    it('should check if request is created.', () => {
        expect(_request).toBeTruthy();
    });

    it('should check if request resolve return correct data.', fakeAsync(() => {
        _request.request(of(data));
        tick();
        expect(_request.data).toEqual(data);
    }));

    it('should check if request resolve return correct error.', fakeAsync(() => {
        const error = {'code': 401, 'message': 'Ununthorized Access'};
        _request.request(throwError(error));
        tick();
        expect(_request.error).toEqual(error);
    }));

    it('should check if cleanup take place each request.', fakeAsync(() => {
        _request.request(of(data));
        tick();
        expect(_request.subscription != null).toBeTruthy();
        _request.request(of(data).pipe(delay(2000)));
        tick(2000);
        _request.clear();
        expect(_request.subscription.closed).toBeTruthy();
    }));
});