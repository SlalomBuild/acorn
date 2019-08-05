import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, filter } from 'rxjs/operators';

import { ApplicationActions } from 'app/actions';
import * as allActions  from 'app/actions';
import * as s from 'app/reducers/store';

@Injectable()
export class ApplicationEffects {
  allActionTypes: string[];

  constructor(
    private actions$: Actions,
    private store: Store<s.State>
  ) {
    // we will need a list of all action types to validate setter/getter pairs later
    const actionCategories = Object.keys(allActions);
    const actionTypeCollection = actionCategories.map(actionCategory => allActions[actionCategory].actionTypes);

    // we have an array of objects, but still need to flatten these out into a regular array
    this.allActionTypes = actionTypeCollection
      .map(typesObject => Object.keys(typesObject).map(key => typesObject[key]))
      .reduce((a, b) => [...a, ...b])
  }

  /*
    This will serve as a global util that will check if a loading flag needs to be set any
    time an action defined in our app fires. If it detects the word "Request" in the action,
    it will set the loading flag to true. If it detects the word "Set" in the action, it
    will set the loading flag associated with the "Request" version of that action to false.

    Note: this assumes every "Request" action has a matchCing "setter" action
  */
  @Effect({ dispatch: false })
  setLoadingFlag$: Observable<void> = this.actions$.pipe(
    filter(action =>
      this.allActionTypes.includes(action.type)
    ),
    map(action => {
      // TODO: PUT/POST? Something more generic here may be required
      if (action.type.indexOf('Request') !== -1) {
        this.store.dispatch(new ApplicationActions.SetLoadingFlag(action.type, true));
      } else if (action.type.indexOf('Set') !== -1) {
        const newActionType = action.type.replace('Set', 'Request');
        // Check if the setter we detected has a corresponding request action which might be loading
        if (this.allActionTypes.includes(newActionType)) {
          // since we found one, set that flag to false as the request must have completed for us to be here
          this.store.dispatch(new ApplicationActions.SetLoadingFlag(newActionType, false));
        }
      }

      // if it's an rxjs action, or a non-network related action, do nothing
      return;
    })
  );
}
