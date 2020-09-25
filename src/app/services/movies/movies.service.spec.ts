import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { HttpService, MoviesService } from 'app/services';
import { Movie } from 'app/models';

describe('Movies Service', () => {
  let service: MoviesService;
  let http: HttpService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = {
      get: jasmine.createSpy('get').and.returnValue(of({})),
      put: jasmine.createSpy('put').and.returnValue(of({})),
      post: jasmine.createSpy('post').and.returnValue(of({})),
      delete: jasmine.createSpy('delete').and.returnValue(of({}))
    };
    const httpProvider = {
      provide: HttpService,
      useValue: mockHttp
    };

    TestBed.configureTestingModule({
      providers: [
        MoviesService,
        httpProvider
      ],
    });

    service = TestBed.get(MoviesService);
    http = TestBed.get(HttpService);
  });

  it('getMoviesCollection should remap result to Movie[]', (done) => {
    mockHttp.get.and.returnValue(of([{}]));
    service.getMoviesCollection().subscribe((result) => {
      expect(result[0] instanceof Movie).toEqual(true);
      done();
    });
  });

  it('getMovie should remap result to Movie', (done) => {
    service.getMovie(123).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('updateMovie should remap result to Movie', (done) => {
    service.updateMovie(new Movie()).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('createMovie should remap result to Movie', (done) => {
    service.createMovie(new Movie()).subscribe((result) => {
      expect(result instanceof Movie).toEqual(true);
      done();
    });
  });

  it('deleteMovie should remap result to undefined', (done) => {
    mockHttp.delete.and.returnValue(of(null));
    service.deleteMovie(123).subscribe((result) => {
      expect(result).toBeNull();
      done();
    });
  });
});
