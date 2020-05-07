import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiAdaptor } from '../../adaptor/api-adaptor';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiAdaptor) { }

  register(form: Register): Observable<Token> {
    return this.api.post('authentication/register', form);
  }

  login(credentials): Observable<Token> {
    return this.api.post('authentication/login', credentials);
  }
}
