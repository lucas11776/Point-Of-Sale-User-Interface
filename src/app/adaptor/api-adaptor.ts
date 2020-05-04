import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAdaptor {
  static DOMAIN = 'http://localhost/api/';

  constructor(private _http: HttpService) { }

  get<T>(uri: string, header?: object): Observable<T> {
    return this._http.get<T>(`${ApiAdaptor.DOMAIN}${uri}`, header);
  }

  post<T>(uri: string, data: any, header?: object): Observable<T> {
    return this._http.post<T>(`${ApiAdaptor.DOMAIN}${uri}`, data, header);
  }

  put<T>(uri: string, data: any, header?: object): Observable<T> {
    return this._http.put<T>(`${ApiAdaptor.DOMAIN}${uri}`, data, header);
  }

  patch<T>(uri: string, data: any, header?: object): Observable<T> {
    return this._http.patch<T>(`${ApiAdaptor.DOMAIN}${uri}`, data, header);
  }

  delete<T>(uri: string): Observable<T> {
    return this._http.delete<T>(`${ApiAdaptor.DOMAIN}${uri}`);
  }
}
