import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  RequestMethod,
  Request
} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { omitBy, isNil } from 'lodash';

@Injectable()
export class HttpClient {
  constructor(public http: Http) {}

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(RequestMethod.Head, url, null, options);
  }

  private setAuthTokenHeader(headers: Headers) {
    headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }

  private request(method: RequestMethod, url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body
    }, omitBy(options, isNil)));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    // this.setAuthTokenHeader(requestOptions.headers);

    return this.http.request(new Request(requestOptions))
      .map(res => {
        // Do anything necessary for logging the response
        return res && res;
      })
      .catch(err => {
        // Do anything necessary for logging the error
        return Observable.throw(err);
      });
  }
}
