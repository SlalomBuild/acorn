import { Action } from '@ngrx/store';

export const actionTypes = {
  SET_LOADING_FLAG: '[Application] Set loading flag for a network call',
  OPEN_MODAL: '[Application] Opens a particular modal',
  CLOSE_ALL_MODALS: '[Application] Closes every modal',
};

/**
 * Action to set loading flag
 * @param actionType - Type of the action to have its flag set
 * @param isLoading - Flag designating if request is loading or not
 */
export class SetLoadingFlag implements Action {
  type = actionTypes.SET_LOADING_FLAG;
  constructor(
    public actionType: string,
    public isLoading: boolean
  ) { }
}

/**
 * Action to open a particular modal
 * @param payload - modal name to open
 */
export class OpenModal implements Action {
  type = actionTypes.OPEN_MODAL;
  constructor(public payload: string) { }
}

/**
 * Action to close every modal in the app
 */
export class CloseAllModals implements Action {
  type = actionTypes.CLOSE_ALL_MODALS;
  constructor() { }
}

export type Actions =
  OpenModal
  | CloseAllModals;
