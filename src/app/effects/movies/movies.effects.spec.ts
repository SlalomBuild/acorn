import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs';

import { MoviesEffects } from 'app/effects';
import { MoviesActions } from 'app/actions';
import { MoviesService } from 'app/services';
import { Movie } from 'app/models';

describe('Movies Effects', () => {
  let effects: MoviesEffects;
  let service: MoviesService;
  let actions: ReplaySubject<any>;
  let getMoviesCollection, getMovie, createMovie, updateMovie, deleteMovie;
  let dispatch;

  beforeEach(() => {
    getMoviesCollection = jasmine.createSpy('getMoviesCollection');
    getMovie = jasmine.createSpy('getMovie');
    createMovie = jasmine.createSpy('createMovie');
    updateMovie = jasmine.createSpy('updateMovie');
    deleteMovie = jasmine.createSpy('deleteMovie');
    dispatch = jasmine.createSpy('dispatch');

    const serviceProvider = {
      provide: MoviesService,
      useValue: {
        getMoviesCollection,
        getMovie,
        createMovie,
        updateMovie,
        deleteMovie,
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

  it('requestMoviesCollection should dispatch a SetMovies on success', async(() => {
    const mockData = [
      new Movie({
        id: '1',
        title: 'Star Wars',
        description: 'All of them.'
      })
    ];
    getMoviesCollection.and.returnValue(Observable.of(mockData));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.RequestMovies());

    effects.requestMoviesCollection$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovies(mockData));
    });
  }));

  it('requestMoviesCollection should do something on error', async(() => {
    getMoviesCollection.and.returnValue(Observable.throw({}));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.RequestMovies());

    effects.requestMoviesCollection$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovies(null));
    });
  }));

  it('requestMovie should dispatch a SetMovie on success', async(() => {
    const mockData = new Movie({
      id: '1',
      title: 'Star Wars',
      description: 'All of them.'
    });
    getMovie.and.returnValue(Observable.of(mockData));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.RequestMovie('1'));

    effects.requestMovie$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovie(mockData));
    });
  }));

  it('requestMovie should do something on error', async(() => {
    getMovie.and.returnValue(Observable.throw({}));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.RequestMovie('1'));

    effects.requestMovie$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.SetMovie(null));
    });
  }));



  it('createMovie should dispatch a RequestMovies on success', async(() => {
    createMovie.and.returnValue(Observable.of(new Movie()));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.CreateMovie(new Movie()));

    effects.createMovie$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.RequestMovies());
    });
  }));

  it('updateMovie should dispatch a RequestMovies on success', async(() => {
    updateMovie.and.returnValue(Observable.of(new Movie()));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.UpdateMovie(new Movie()));

    effects.updateMovie$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.RequestMovies());
    });
  }));

  it('deleteMovie should dispatch a RequestMovies on success', async(() => {
    deleteMovie.and.returnValue(Observable.of(null));
    actions = new ReplaySubject(1);
    actions.next(new MoviesActions.DeleteMovie('1'));

    effects.deleteMovie$.subscribe(result => {
      expect(result).toEqual(new MoviesActions.RequestMovies());
    });
  }));
});
