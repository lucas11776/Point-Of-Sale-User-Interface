import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  get<T>(url: string, header?: object): Observable<T> {
    return this._http.get<T>(url, header);
  }

  post<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.post<T>(url, data, header);
  }

  put<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.put<T>(url, data, header);
  }

  patch<T>(url: string, data: any, header?: object): Observable<T> {
    return this._http.patch<T>(url, data, header);
  }

  delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(url);
  }
}
