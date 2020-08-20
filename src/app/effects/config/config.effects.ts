import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ConfigActions } from 'app/actions';
import { ConfigService } from 'app/services';
import * as s from 'app/reducers/store';
import { Config } from 'app/models';

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions,
    private configService: ConfigService,
    private store: Store<s.State>
  ) { }

  /**
   * Fetch config
   * @success: fire off action to update config
   * @error: ???
   */
  @Effect()
  requestConfig$: Observable<Action> = this.actions$.pipe(
    ofType(ConfigActions.actionTypes.REQUEST_CONFIG),
    mergeMap((action: ConfigActions.RequestConfig) => {
      return this.configService.getConfig()
        .map((res: Config) => {
          return new ConfigActions.SetConfig(res);
        })
        .catch(() => {
          return Observable.of(new ConfigActions.SetConfig(null));
        })
    })
  );
}
