import { Action } from '@ngrx/store';
import { Config } from 'app/models';

export const actionTypes = {
  REQUEST_CONFIG: '[Config] Request config',
  SET_CONFIG:     '[Config] Set config',
};

/**
 * Action to initiate a request to fetch the config
 */
export class RequestConfig implements Action {
  type = actionTypes.REQUEST_CONFIG;
  constructor() { }
}

/**
 * Action to set config
 * @param payload - collection of config
 */
export class SetConfig implements Action {
  type = actionTypes.SET_CONFIG;
  constructor(public payload: Config) { }
}

export type Actions =
  RequestConfig
  | SetConfig;
