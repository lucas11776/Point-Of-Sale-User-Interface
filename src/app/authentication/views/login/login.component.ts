import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginForm } from '../../forms/login.form';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'pos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginForm implements OnDestroy {
  error: any;
  subscription: Subscription;

  constructor(private _auth: AuthenticationService) {
    super();
  }

  login() {
    this.ngOnDestroy();
    // this.subscription = this._auth.login(this.form.value)
    //   .subscribe(
    //     (res) => this.error = res,
    //     (err) => this.error = err,
    //   );
  }

  ngOnDestroy() {
    if(this.error) this.error = null;
    if(this.subscription) this.subscription.unsubscribe();
  }  
}
