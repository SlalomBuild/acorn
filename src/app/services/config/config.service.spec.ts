import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { HttpClient, ConfigService } from 'app/services';

describe('Config Service', () => {
  let service: ConfigService;
  let get;

  beforeEach(() => {
    get = jasmine.createSpy('get').and.returnValue(Observable.of(null));
    const httpProvider = {
      provide: HttpClient,
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
    get.and.returnValue(Observable.of({  }));
    service.getConfig().subscribe((res) => {
      expect(res).toEqual(new Config());
      done();
    });
  });
});
