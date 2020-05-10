import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { LoginForm } from '../../forms/login.form';
import { AuthenticationService } from '../../shared/authentication.service';
import { TokenService } from '../../shared/token.service';
import { Token } from '../../models/token.model';
import { Request } from '../../../logic/request';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginForm {
  subscription: Subscription;

  constructor(
    private _auth: AuthenticationService,
    private _token: TokenService,
    private _router: Router,
    private _request: Request) {
    super();
  }

  get error(): any {
    return this._request.error;
  }

  login(): void {
    this._request.request(
      this.loginRequest()
    );
  }

  protected success(token: Token): void {
    this._token.set(token);
    this._router.navigate(['/']);
  }

  private loginRequest(): Observable<void> {
    return this._auth.login(this.form.value).pipe(
      map(token => this.success(token))
    )
  }
}
