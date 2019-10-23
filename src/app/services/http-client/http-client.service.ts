import { Injectable } from '@angular/core';
import {
  HttpClient as NgHttpClient,
  HttpParams,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
  HttpEvent
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { omitBy, isNil } from 'lodash';

export const HTTP_VERBS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
  head: 'HEAD'
};

@Injectable()
export class HttpClient {
  constructor(public http: NgHttpClient) {}

  public get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.get, url, null, params, headers);
  }

  public post<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.post, url, body, params, headers);
  }

  public put<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.put, url, body, params, headers);
  }

  public delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.delete, url, null, params, headers);
  }

  public patch<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.patch, url, body, params, headers);
  }

  public head<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.request(HTTP_VERBS.head, url, null, params, headers);
  }

  private request<T>(method: string, url: string, body?: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    let requestOptions = (Object.assign({
      headers,
      params,
      body,
      observe: 'response',
      responseType: 'json',
      reportProgress: false,
      withCredentials: false
    }, omitBy(params, isNil)));

    return this.http.request<T>(method, url, requestOptions)
      .map((res: HttpResponse<T>) => {
        // Do anything necessary for logging the response
        return res.body;
      })
      .catch(err => {
        // Do anything necessary for logging the error
        return Observable.throw(err);
      });
  }
}
