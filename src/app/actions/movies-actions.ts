import { Action } from '@ngrx/store';

import { Movie } from 'app/models';

export const actionTypes = {
  REQUEST_MOVIES: '[Movies] Request movies collection',
  SET_MOVIES:     '[Movies] Set movies collection',
  REQUEST_MOVIE:  '[Movies] Request movie by id',
  SET_MOVIE:      '[Movies] Set movie movie details',
  CREATE_MOVIE:   '[Movies] Request to create a new movie',
  UPDATE_MOVIE:   '[Movies] Request to update an existing movie',
  DELETE_MOVIE:   '[Movies] Request to delete an existing movie',
};

/**
 * Action to initiate a request to fetch the movie collection
 */
export class RequestMovies implements Action {
  type = actionTypes.REQUEST_MOVIES;
  constructor() { }
}

/**
 * Action to set the sample data collection
 * @param payload {Movie[]} - collection of movies
 */
export class SetMovies implements Action {
  type = actionTypes.SET_MOVIES;
  constructor(public payload: Movie[]) { }
}

/**
 * Action to initiate a request to fetch a specific movie
 * @param payload {string} - Id of movie to be deleted
 */
export class RequestMovie implements Action {
  type = actionTypes.REQUEST_MOVIE;
  constructor(public payload: string) { }
}

/**
 * Action to set the details for a specific movie
 * @param payload {Movie} - Details for designated movie
 */
export class SetMovie implements Action {
  type = actionTypes.SET_MOVIE;
  constructor(public payload: Movie) { }
}

/**
 * Action to initiate a request to create a new movie
 * @param payload {Movie} - Movie to be created
 */
export class CreateMovie implements Action {
  type = actionTypes.CREATE_MOVIE;
  constructor(public payload: Movie) { }
}

/**
 * Action to initiate a request to fetch a specific movie
 * @param payload {Movie} - Movie to be updated
 */
export class UpdateMovie implements Action {
  type = actionTypes.UPDATE_MOVIE;
  constructor(public payload: Movie) { }
}

/**
 * Action to initiate a request to fetch a specific movie
 * @param payload {string} - Id of movie to be deleted
 */
export class DeleteMovie implements Action {
  type = actionTypes.DELETE_MOVIE;
  constructor(public payload: string) { }
}

export type Actions =
  RequestMovies
  | SetMovies
  | RequestMovie
  | SetMovie
  | CreateMovie
  | UpdateMovie
  | DeleteMovie;
