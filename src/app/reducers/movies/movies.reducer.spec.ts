import { MoviesReducer } from 'app/reducers';
import { MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

describe('MoviesReducer', () => {
  let initialState: MoviesReducer.State;

  beforeEach(() => {
    initialState = {
      ...MoviesReducer.initialState
    };
  });

  it('SET_MOVIES should update movies', () => {
    const newCollection = [new Movie()];
    const result = MoviesReducer.reducer(initialState, new MoviesActions.SetMovies(newCollection));
    expect(result.movies).toEqual(newCollection);
  });

  it('should not update state in default case', () => {
    const action = new MoviesActions.RequestMovies();
    const result = MoviesReducer.reducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('getMovieCollection should return movies', () => {
    expect(MoviesReducer.getMoviesCollection(initialState)).toEqual(initialState.movies);
  });
});
