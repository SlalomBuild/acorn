import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromSample from './sample';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  sample: fromSample.State;
};

export const reducers = {
  sample: fromSample.reducer,
};

// Sample State and Selectors
export const getSampleState = (state: State) => state.sample;
export const getSampleCollection = createSelector(getSampleState, fromSample.getSampleCollection);
