import { Action } from '@ngrx/store';

export const actionTypes = {
  REQUEST_MOVIES: '[Movies] Request movies collection',
  SET_MOVIES:     '[Movies] Set movies collection',
};

/**
 * Action to initiate a request to fetch the sample collection
 */
export class RequestMovies implements Action {
  type = actionTypes.REQUEST_MOVIES;
  constructor() { }
}

/**
 * Action to set the sample data collection
 * @param payload {any} - collection of sample data
 */
export class SetMovies implements Action {
  type = actionTypes.SET_MOVIES;
  constructor(public payload: any) { }
}

export type Actions =
    RequestMovies
  | SetMovies;
