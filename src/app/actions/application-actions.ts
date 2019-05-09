import { Action } from '@ngrx/store';

export const actionTypes = {
  OPEN_MODAL: '[Application] Opens a particular modal',
  CLOSE_ALL_MODALS: '[Application] Closes every modal',
};

/**
 * Action to open a particular modal
 * @param payload {string} - modal name to open
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
