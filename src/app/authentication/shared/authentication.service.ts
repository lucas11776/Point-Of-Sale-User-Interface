import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiAdaptor } from '../../adaptor/api-adaptor';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiAdaptor) { }

  register(form: Register): Observable<any> {
    return this.api.post('authentication/register', form);
  }

  login(credentials: Login): Observable<any> {
    return this.api.post('authentication/login', credentials);
  }
}
