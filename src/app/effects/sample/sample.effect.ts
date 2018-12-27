import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';

import { SampleActions } from 'app/actions';
import { SampleService } from 'app/services';
import * as fromReducers from 'app/reducers/store';

@Injectable()
export class ApplicationEffects {
  constructor(
    private actions$: Actions,
    private sampleService: SampleService,
    private store: Store<fromReducers.State>
  ) { }

  /**
   * Fetch sample collection
   * @success: fire off request to get sample collection
   * @error: ???
   */
  @Effect()
  requestSampleData$: Observable<Action> = this.actions$.pipe(
    ofType(SampleActions.actionTypes.REQUEST_SAMPLE_DATA),
    mergeMap((action) => {
      return this.sampleService.getSampleCollection()
        .map((res: any) => {
          return new SampleActions.SetSampleCollection(res);
        })
        .catch(() => {
          // TODO: error handling
          return Observable.of(/* new Action() */);
        })
    })
  );
}
