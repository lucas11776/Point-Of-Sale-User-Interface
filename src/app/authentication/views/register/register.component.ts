import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { RegisterForm } from '../../forms/register.form';
import { AuthenticationService } from '../../shared/authentication.service';
import { TokenService } from '../../shared/token.service';
import { Router } from '@angular/router';
import { Request } from '../../../logic/request';
import { Token } from '../../models/token.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'pos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends RegisterForm {
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

  register() {
    this._request.request(
      this.registerRequest()
    );
  }

  protected success(token: Token): void {
    this._token.set(token);
    this._router.navigate(['/']);
  }

  private registerRequest(): Observable<void> {
    return this._auth.register(this.form.value).pipe(
      map(token => this.success(token))
    );
  }
}
