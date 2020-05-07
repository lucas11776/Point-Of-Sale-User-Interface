import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CookieInterceptor } from './cookies.interceptor';

export const INTERCEPTORS = [
    { provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
];