import { ApplicationActions } from 'app/actions';

export interface State {
  modals: any; // obj where each key represents a modal to have open/closed
  loadingFlags: any // obj where each key represents a loading flag
}

export const initialState: State = {
  modals: {
    movie: false
  },
  loadingFlags: {},
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {
    case ApplicationActions.actionTypes.SET_LOADING_FLAG: {
      const act = action as ApplicationActions.SetLoadingFlag;
      return Object.assign({}, state, {
        loadingFlags: {
          ...state.loadingFlags,
          [act.actionType]: act.isLoading
        }
      });
    }
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
export const getLoadingFlags = (state: State): boolean => state.loadingFlags;
export const getLoadingFlag = (state: State, actionType: string): boolean => state.loadingFlags[actionType];
