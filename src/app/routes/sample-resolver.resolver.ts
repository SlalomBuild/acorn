import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';
import { SampleActions } from 'app/actions';

@Injectable({
  providedIn: 'root',
})
export class SampleResolver implements Resolve<boolean> {
  constructor(
    private store: Store<fromReducers.State>
  ) { }

  resolve() {
    this.store.dispatch(new SampleActions.RequestSampleData());
    return true;
  }
}
