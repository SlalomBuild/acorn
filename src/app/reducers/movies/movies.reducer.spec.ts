import { SampleReducer } from 'app/reducers';
import { SampleActions } from 'app/actions';

describe('SampleReducer', () => {
  let initialState: SampleReducer.State;

  beforeEach(() => {
    initialState = {
      sampleCollection: {
        collection: [ { a: 1 } ],
        size: 1,
        pageSize: 25,
        page: 1
      }
    };
  });

  it('SET_SAMPLE_DATA should update sampleCollection', () => {
    const newCollection = {
      collection: [ { a: 10 } ],
      size: 1,
      pageSize: 25,
      page: 1
    };
    const result = SampleReducer.reducer(initialState, new SampleActions.SetSampleCollection(newCollection));
    expect(result.sampleCollection).toEqual(newCollection);
  });

  it('should not update state in default case', () => {
    const action = new SampleActions.RequestSampleData();
    const result = SampleReducer.reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('getSampleCollection should return sampleCollection', () => {
    expect(SampleReducer.getSampleCollection(initialState)).toEqual(initialState.sampleCollection);
  });
});
