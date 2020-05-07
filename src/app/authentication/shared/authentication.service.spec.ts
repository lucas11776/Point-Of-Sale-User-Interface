import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { TokenMock } from '../mocks/token.mock';
import { LoginMock } from '../mocks/login.mock';
import { Token } from '../models/token.model';
import { ApiAdaptor } from '../../adaptor/api-adaptor';
import { HttpService } from 'src/app/shared/http.service';

describe('AuthenticationService', () => {
  let _auth: AuthenticationService;
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  beforeEach(() => {
    _auth = TestBed.get(AuthenticationService);
  });

  it('should check if authentication service is created.', () => {
    expect(_auth).toBeTruthy();
  });

  it('should login and get token.', fakeAsync(() => {
    spyOn(_auth, 'login').and.callFake(() => of(TokenMock()));
    let token: Token;
    _auth.login(LoginMock()).subscribe((_token) => token = _token);
    tick();
    expect(token).toEqual(TokenMock());
  }));
});
