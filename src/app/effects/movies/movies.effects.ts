import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
    mergeMap((action) => {
      return this.moviesService.getMoviesCollection()
        .map((res: Movie[]) => {
          return new MoviesActions.SetMovies(res);
        })
        .catch(() => {
          return of(new MoviesActions.SetMovies(null));
        })
    })
  );
}
