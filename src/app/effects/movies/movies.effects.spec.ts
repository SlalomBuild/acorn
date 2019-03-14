import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs';

import { MoviesEffects } from 'app/effects';
import { MoviesActions } from 'app/actions';
import { MoviesService } from 'app/services';

describe('Movies Effects', () => {
  let effects: MoviesEffects;
  let service: MoviesService;
  let actions: ReplaySubject<any>;
  let getMoviesCollection, dispatch;

  beforeEach(() => {
    getMoviesCollection = jasmine.createSpy('getMoviesCollection');
    dispatch = jasmine.createSpy('dispatch');
    const serviceProvider = {
      provide: MoviesService,
      useValue: {
        getMoviesCollection: getMoviesCollection
      }
    };
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch
      }
    }

    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions),
        serviceProvider,
        storeProvider
      ],
    });

    effects = TestBed.get(MoviesEffects);
  });

  it('requestMoviesCollection should dispatch a SetMovies on success', () => {
    const mockData = {
      movies: [{
        id: '1',
        title: 'Star Wars',
        description: 'All of them.'
      }]
    };
    getMoviesCollection.and.returnValue(Observable.of(mockData))
    actions = new ReplaySubject(1);
    actions.next(MoviesActions.RequestMovies);

    effects.requestMoviesCollection$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovies(mockData));
    });
  });

  it('requestMoviesCollection should do something on error', () => {
    getMoviesCollection.and.returnValue(Observable.throw({}));
    actions = new ReplaySubject(1);
    actions.next(MoviesActions.RequestMovies);

    effects.requestMoviesCollection$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovies(null));
    });
  });
});
