import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { HttpService, ConfigService } from 'app/services';
import { Config } from 'app/models';

describe('Config Service', () => {
  let service: ConfigService;
  let get;

  beforeEach(() => {
    get = jasmine.createSpy('get').and.returnValue(of(null));
    const httpProvider = {
      provide: HttpService,
      useValue: {
        get: get
      }
    };

    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        httpProvider
      ],
    });

    service = TestBed.get(ConfigService);
  });

  it('getConfig should remap result to Config', (done) => {
    get.and.returnValue(of({  }));
    service.getConfig().subscribe((res) => {
      expect(res).toEqual(new Config());
      done();
    });
  });
});
