import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { HttpClient, MoviesService } from 'app/services';

describe('Movies Service', () => {
  let service: MoviesService;
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
        MoviesService,
        httpProvider
      ],
    });

    service = TestBed.get(MoviesService);
    http = TestBed.get(HttpClient);
  });

  it('getMoviesCollection should remap result to json', (done) => {
    service.getSampleCollection().subscribe(() => {
      expect(json).toHaveBeenCalled();
      done();
    });
  });
});
