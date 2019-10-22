import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { HttpClient, MoviesService } from 'app/services';
import { Movie } from 'app/models';

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
        ),
        put: jasmine.createSpy('put').and.returnValue(
          Observable.of({ json })
        ),
        post: jasmine.createSpy('post').and.returnValue(
          Observable.of({ json })
        ),
        delete: jasmine.createSpy('delete').and.returnValue(
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

  it('getMoviesCollection should remap result to movie[]', (done) => {
    json.and.returnValue([]);
    service.getMoviesCollection().subscribe((result) => {
      expect(json).toHaveBeenCalled();
      done();
    });
  });

  it('getMovie should remap result to movie', (done) => {
    json.and.returnValue(new Movie());
    service.getMovie(123).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('updateMovie should remap result to json', (done) => {
    json.and.returnValue(new Movie());
    service.updateMovie(new Movie()).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('createMovie should remap result to json', (done) => {
    json.and.returnValue(new Movie());
    service.createMovie(new Movie()).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('deleteMovie should remap result to json', (done) => {
    json.and.returnValue(null);
    service.deleteMovie(123).subscribe((result) => {
      expect(result).toBeUndefined();
      done();
    });
  });
});
