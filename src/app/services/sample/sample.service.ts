import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '../http-client';
import serviceEndpoints from '../endpoints';

@Injectable()
export class SampleService {
  constructor(public http: HttpClient) { }

  getSampleCollection(): Observable<any> {
    return this.http.get(serviceEndpoints.sample)
      .map(res => res.json());
  }
}
