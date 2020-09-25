import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http-client';
import serviceEndpoints from '../endpoints';
import { Config } from 'app/models';

@Injectable()
export class ConfigService {
  constructor(public http: HttpService) { }

  getConfig(): Observable<Config> {
    return this.http.get(serviceEndpoints.config())
      .map((res: any): Config => new Config(res));
  }
}
