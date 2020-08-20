import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '../http-client';
import serviceEndpoints from '../endpoints';
import { Config } from 'app/models';

@Injectable()
export class ConfigService {
  constructor(public http: HttpClient) { }

  getConfig(): Observable<Config> {
    return this.http.get<Config>(serviceEndpoints.config())
      .map(res => new Config(res));
  }
}
