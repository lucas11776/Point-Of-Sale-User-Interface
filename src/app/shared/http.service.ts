import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  get<T>(url: string, header?: object): Observable<T> {
    return this._http.get<T>(url, header);
  }

  post<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.post<T>(url, data, header).pipe(
      catchError(this.errorHandle)
    );
  }

  put<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.put<T>(url, data, header).pipe(
      catchError(this.errorHandle)
    );
  }

  patch<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.patch<T>(url, data, header).pipe(
      catchError(this.errorHandle)
    );
  }

  delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(url).pipe(
      catchError(this.errorHandle)
    );
  }

  errorHandle(httpError: HttpErrorResponse): Observable<never> {
    let error: {} = httpError.error ? httpError.error : this.broswerError(httpError);
    error['code'] = httpError.status;
    return throwError(error);
  }

  protected broswerError(httpError: HttpErrorResponse): {} {
    return {
      message: httpError.message
    };
  }
}
