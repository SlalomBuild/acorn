import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '../http-client';
import serviceEndpoints from '../endpoints';

@Injectable()
export class MoviesService {
  constructor(public http: HttpClient) { }

  getMoviesCollection(): Observable<any> {
    return this.http.get(serviceEndpoints.movies)
      .map(res => res.json());
  }
}
