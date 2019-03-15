import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { MoviesActions } from 'app/actions';
import { MoviesService } from 'app/services';
import * as fromReducers from 'app/reducers/store';
import { Movie } from 'app/models'

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
    private store: Store<fromReducers.State>
  ) { }

  /**
   * Fetch movie collection
   * @success: fire off action to set movie collection
   * @error: ???
   */
  @Effect()
  requestMoviesCollection$: Observable<Action> = this.actions$.pipe(
    ofType(MoviesActions.actionTypes.REQUEST_MOVIES),
    mergeMap((action: MoviesActions.RequestMovies) => {
      return this.moviesService.getMoviesCollection()
        .map((res: Movie[]) => {
          return new MoviesActions.SetMovies(res);
        })
        .catch(() => {
          return Observable.of(new MoviesActions.SetMovies(null));
        })
    })
  );

  /**
   * Fetch individual movie by id
   * @success: fire off action to set movie details
   * @error: ???
   */
  @Effect()
  requestMovie$: Observable<Action> = this.actions$.pipe(
    ofType(MoviesActions.actionTypes.REQUEST_MOVIE),
    mergeMap((action: MoviesActions.RequestMovie) => {
      return this.moviesService.getMovie(action.payload)
        .map((res: Movie) => {
          return new MoviesActions.SetMovie(res);
        })
        .catch(() => {
          return Observable.of(new MoviesActions.SetMovie(null));
        })
    })
  );

  /**
   * Create new movie
   * @success: fire off action to fetch updated movie collection
   * @error: ???
   */
  @Effect()
  createMovie$: Observable<Action> = this.actions$.pipe(
    ofType(MoviesActions.actionTypes.CREATE_MOVIE),
    mergeMap((action: MoviesActions.CreateMovie) => {
      return this.moviesService.createMovie(action.payload)
        .map(() => {
          return new MoviesActions.RequestMovies();
        })
        // .catch(() => {
        //   return Observable.of(new MoviesActions.SetMovies(null));
        // })
    })
  );

  /**
   * Update existing movie
   * @success: fire off action to fetch updated movie collection
   * @error: ???
   */
  @Effect()
  updateMovie$: Observable<Action> = this.actions$.pipe(
    ofType(MoviesActions.actionTypes.UPDATE_MOVIE),
    mergeMap((action: MoviesActions.UpdateMovie) => {
      return this.moviesService.updateMovie(action.payload)
        .map(() => {
          return new MoviesActions.RequestMovies();
        })
        // .catch(() => {
        //   return Observable.of(new MoviesActions.SetMovies(null));
        // })
    })
  );

  /**
   * Delete existing movie
   * @success: fire off action to fetch updated movie collection
   * @error: ???
   */
  @Effect()
  deleteMovie$: Observable<Action> = this.actions$.pipe(
    ofType(MoviesActions.actionTypes.DELETE_MOVIE),
    mergeMap((action: MoviesActions.DeleteMovie) => {
      return this.moviesService.deleteMovie(action.payload)
        .map(() => {
          return new MoviesActions.RequestMovies();
        })
        // .catch(() => {
        //   return Observable.of(new MoviesActions.SetMovies(null));
        // })
    })
  );
}
