import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cookie } from '../logic/cookie';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {
    constructor(private _cookie: Cookie) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._cookie.all() ? this.injectCookies(request, next) : next.handle(request.clone());
    }

    private injectCookies(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request.clone({setHeaders: this._cookie.all()}));
    }
}