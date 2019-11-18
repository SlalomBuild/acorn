import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';
import { MoviesActions } from 'app/actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<boolean> {
  constructor(
    private store: Store<fromReducers.State>
  ) { }

  resolve() {
    this.store.dispatch(new MoviesActions.RequestMovies());
    return true;
  }
}
