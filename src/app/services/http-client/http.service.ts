import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

// Note: This is meant to represent the standard response body from the Blackslope API
// https://github.com/SlalomBuild/blackslope.net
export interface Response {
  data: {};
  error: {};
}

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  public get(queryUrl: string, params?): Observable<any> {
    return this.httpClient.get<Response>(queryUrl, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

  public post(queryUrl: string, body: any, params?): Observable<any> {
    return this.httpClient.post<Response>(queryUrl, body, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

  public put(queryUrl: string, body: any, params?): Observable<any> {
    return this.httpClient.put<Response>(queryUrl, body, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

  public delete(queryUrl: string, params?): Observable<any> {
    return this.httpClient.delete<Response>(queryUrl, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

  public head(queryUrl: string, params?): Observable<any> {
    return this.httpClient.head<Response>(queryUrl, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

  public patch(queryUrl: string, body: any, params?): Observable<any> {
    return this.httpClient.patch<Response>(queryUrl, body, { params }).map(responseObj => {
      return responseObj && (responseObj.data || responseObj);
    });
  }

}
