import { TestBed, async, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { MoviesResolver } from './movies.resolver';
import { MoviesActions } from 'app/actions';

describe('MoviesResolver', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch
      }
    };

    TestBed.configureTestingModule({
      providers: [MoviesResolver, storeProvider]
    });
  });

  it('resolve should dispatch a RequestMovies', inject([MoviesResolver], (resolver: MoviesResolver) => {
    resolver.resolve();
    expect(dispatch).toHaveBeenCalledWith(new MoviesActions.RequestMovies());
  }));
});
