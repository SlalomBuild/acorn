import { ApplicationReducer } from 'app/reducers';
import { ApplicationActions, MoviesActions } from 'app/actions';

describe('Application Reducer', () => {
  let initialState: ApplicationReducer.State;

  beforeEach(() => {
    initialState = {
      ...ApplicationReducer.initialState
    };
  });

  it('SET_LOADING_FLAG should set designated loadingFlag to true', () => {
    const flag = 'search';
    const result = ApplicationReducer.reducer(initialState, new ApplicationActions.SetLoadingFlag(flag, true));
    expect(result.loadingFlags[flag]).toEqual(true);
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
        movie: true
      }
    };
    const modal = 'movie';
    const result = ApplicationReducer.reducer(initState, new ApplicationActions.CloseAllModals());
    expect(result.modals[modal]).toEqual(false);
  });

  it('should not update state in default case', () => {
    const action = new MoviesActions.SetMovies([]);
    const result = ApplicationReducer.reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('getLoadingFlags should return all loading flags', () => {
    const state = ApplicationReducer.reducer(initialState, new ApplicationActions.SetLoadingFlag(key, true));
    expect(ApplicationReducer.getLoadingFlags(state)).toEqual(initialState.loadingFlags);
  });

  it('getLoadingFlag should return designated flag\'s status', () => {
    const key = MoviesActions.actionTypes.REQUEST_MOVIES;
    const state = ApplicationReducer.reducer(initialState, new ApplicationActions.SetLoadingFlag(key, true));
    expect(ApplicationReducer.getLoadingFlag(state, key)).toEqual(true);
  });

  it('getModal should return designated modal\'s status', () => {
    expect(ApplicationReducer.getModal(initialState, 'movie')).toEqual(false);
  });
});
