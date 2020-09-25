import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromApplication from './application';
import * as fromMovies from './movies';
import * as fromConfig from './config';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  application: fromApplication.State;
  movies: fromMovies.State;
  config: fromConfig.State;
}

export const reducers = {
  application: fromApplication.reducer,
  movies: fromMovies.reducer,
  config: fromConfig.reducer,
};

// Application State and Selectors
export const getApplicationState = (state: State) => state.application;
export const getModal = (modal: string) => {
  return createSelector(
    getApplicationState,
    (state): boolean => fromApplication.getModal(state, modal)
  );
};

// Movie State and Selectors
export const getMoviesState = (state: State) => state.movies;
export const getMoviesCollection = createSelector(getMoviesState, fromMovies.getMoviesCollection);
export const getMovie = createSelector(getMoviesState, fromMovies.getMovie);

// Config State and Selectors
export const getConfigState = (state: State) => state.config;
export const getConfig = createSelector(getConfigState, fromConfig.getConfig);
