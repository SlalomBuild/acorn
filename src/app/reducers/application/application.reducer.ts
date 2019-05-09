import { ApplicationActions } from 'app/actions';

export interface State {
  modals: any // obj where each key represents a modal to have open/closed
}

export const initialState: State = {
  modals: {
    movie: false
  },
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {
    case ApplicationActions.actionTypes.OPEN_MODAL: {
      const act = action as ApplicationActions.OpenModal;
      const modals = { ...state.modals };
      Object.keys(modals).forEach(key => {
        modals[key] = false;
      });
      modals[act.payload] = true;
      return Object.assign({}, state, { modals });
    }
    case ApplicationActions.actionTypes.CLOSE_ALL_MODALS: {
      const modals = { ...state.modals };
      Object.keys(modals).forEach(key => {
        modals[key] = false;
      });
      return Object.assign({}, state, { modals });
    }
    default: {
      return state;
    }
  }
}

export const getModal = (state: State, modalName: string): boolean => state.modals[modalName];
