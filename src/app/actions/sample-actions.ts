import { Action } from '@ngrx/store';

export const actionTypes = {
  REQUEST_SAMPLE_DATA: '[Sample] Request sample data',
  SET_SAMPLE_DATA:     '[Sample] Set sample data',
};

/**
 * Action to initiate a request to fetch the sample collection
 */
export class RequestSampleData implements Action {
  type = actionTypes.REQUEST_SAMPLE_DATA;
  constructor() { }
}

/**
 * Action to set the sample data collection
 * @param payload {any} - collection of sample data
 */
export class SetSampleCollection implements Action {
  type = actionTypes.SET_SAMPLE_DATA;
  constructor(public payload: any) { }
}

export type Actions =
    RequestSampleData
  | SetSampleCollection;
