import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { Cookie } from '../../logic/cookie';
import { TokenMock } from '../mocks/token.mock';

describe('TokenService', () => {
  let _token: TokenService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Cookie
    ],
  }));

  beforeEach(() => {
    _token = TestBed.get(TokenService);
  });

  afterEach(() => {
    _token.unset();
  });

  it('should check if token service is created.', () => {
    expect(_token).toBeTruthy();
  });

  it('should store application token in storage.', () => {
    _token.set(TokenMock());
    expect(_token.get()).toBe(TokenMock().token);
  });
  
  it('should unset token from storage.', () => {
    _token.set(TokenMock());
    _token.unset();
    expect(_token.get()).toBe('');
  });
});
