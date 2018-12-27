import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { HttpClient, SampleService } from 'app/services';

describe('Sample Service', () => {
  let service: SampleService;
  let http: HttpClient;
  let json;

  beforeEach(() => {
    json = jasmine.createSpy('json'); // add an .and.returnValue in tests if mock data is required
    const httpProvider = {
      provide: HttpClient,
      useValue: {
        get: jasmine.createSpy('get').and.returnValue(
          Observable.of({ json })
        )
      }
    };

    TestBed.configureTestingModule({
      providers: [
        SampleService,
        httpProvider
      ],
    });

    service = TestBed.get(SampleService);
    http = TestBed.get(HttpClient);
  });

  it('getSampleCollection should remap result to json', (done) => {
    service.getSampleCollection().subscribe(() => {
      expect(json).toHaveBeenCalled();
      done();
    });
  });
});
