import { SampleActions } from 'app/actions';

export interface State {
  sampleCollection: any;
}

export const initialState: State = {
  sampleCollection: null,
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {
    case ApplicationActions.actionTypes.SET_SAMPLE_DATA: {
      const act = action as ApplicationActions.SetSampleCollection;
      return Object.assign({}, state, { sampleCollection: act.payload });
    }
    default: {
      return state;
    }
  }
}

export const getSampleCollection = (state: State): any => { return state.sampleCollection; };
