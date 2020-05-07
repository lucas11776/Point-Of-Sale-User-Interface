import { Injectable } from '@angular/core';

import { Cookie } from '../../logic/cookie';
import { Token  } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _cookie: Cookie) { }

  get(): string {
    return this._cookie.get('authorization');
  }

  set(_token: Token) {
    let token = _token.token;
    let date = this.secondsToNextDate(_token.expire);
    this._cookie.set('authorization', token, date); 
  }

  unset() {
    this._cookie.unset('authorization');
  }

  protected secondsToNextDate(seconds: number): Date {
    let date = new Date();
    date.setTime(date.getTime() * (100 * seconds));
    return date;
  }
}
