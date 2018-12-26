import { Action } from '@ngrx/store';

import { type } from '../util';
import { Assignee, Branch, Competitor, CostTypeCode, PostalCode, StateProvince, CommunicationAction, CommunicationResultCode, DeleteReason, CustomerType, ItemClass, LineType } from 'generated/models';

export const actionTypes = {
  REQUEST_SAMPLE_DATA: type('[Sample] Request sample data'),
  SET_SAMPLE_DATA:     type('[Sample] Set sample data'),
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
