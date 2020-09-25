import { ConfigActions } from 'app/actions';
import { Config } from 'app/models';

export interface State {
  config: Config;
}

export const initialState: State = {
  config: null,
};

export function reducer(state = initialState, action: ConfigActions.Actions): State {
  switch (action.type) {
    case ConfigActions.actionTypes.SET_CONFIG: {
      const act = action as ConfigActions.SetConfig;
      return Object.assign({}, state, { config: act.payload });
    }
    default: {
      return state;
    }
  }
}

export const getConfig = (state: State): Config => state.config;
