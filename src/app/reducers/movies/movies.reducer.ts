import { MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

export interface State {
  movies: Movie[];
  movie: Movie;
}

export const initialState: State = {
  movies: null,
  movie: null,
};

export function reducer(state = initialState, action: MoviesActions.Actions): State {
  switch (action.type) {
    case MoviesActions.actionTypes.SET_MOVIES: {
      const act = action as MoviesActions.SetMovies;
      return Object.assign({}, state, { movies: act.payload });
    }
    case MoviesActions.actionTypes.SET_MOVIE: {
      const act = action as MoviesActions.SetMovie;
      return Object.assign({}, state, { movie: act.payload });
    }
    default: {
      return state;
    }
  }
}

export const getMoviesCollection = (state: State): Movie[] => state.movies;
export const getMovie = (state: State): Movie => state.movie;
