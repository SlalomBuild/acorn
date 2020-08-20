import { ConfigReducer } from 'app/reducers';
import { ConfigActions } from 'app/actions';
import { Config } from 'app/models';

describe('Config Reducer', () => {
  let initialState: ConfigReducer.State;

  beforeEach(() => {
    initialState = {
      config: null
    };
  });

  it('SET_CONFIG should update config', () => {
    // TODO: enter real mock data
    const newConfig = new Config();
    const result = ConfigReducer.reducer(initialState, new ConfigActions.SetConfig(newConfig));
    expect(result.config).toEqual(newConfig);
  });

  it('should not update state in default case', () => {
    const action = new ConfigActions.RequestConfig();
    const result = ConfigReducer.reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('getConfig should return config', () => {
    expect(ConfigReducer.getConfig(initialState)).toEqual(initialState.config);
  });
});
