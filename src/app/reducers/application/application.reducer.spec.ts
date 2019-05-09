import { ApplicationReducer } from 'app/reducers';
import { ApplicationActions } from 'app/actions';

describe('Application Reducer', () => {
  let initialState: ApplicationReducer.State;

  beforeEach(() => {
    initialState = {
      ...ApplicationReducer.initialState
    };
  });

  it('OPEN_MODAL should set designated modal to true', () => {
    const modal = 'search';
    const result = ApplicationReducer.reducer(initialState, new ApplicationActions.OpenModal(modal));
    expect(result.modals[modal]).toEqual(true);
  });

  it('CLOSE_ALL_MODALS should update all modals to false', () => {
    const initState = {
      ...initialState,
      modals: {
        search: true
      }
    };
    const modal = 'search';
    const result = ApplicationReducer.reducer(initState, new ApplicationActions.CloseAllModals());
    expect(result.modals[modal]).toEqual(false);
  });

  it('should not update state in default case', () => {
    const action = new ApplicationActions.RequestApiVersion();
    const result = ApplicationReducer.reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('getModal should return designated modal\'s status', () => {
    expect(ApplicationReducer.getModal(initialState, 'search')).toEqual(false);
  });
});
