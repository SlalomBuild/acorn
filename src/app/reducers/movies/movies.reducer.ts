import { MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

export interface State {
  movies: Movie[];
}

export const initialState: State = {
  movies: null,
};

export function reducer(state = initialState, action: MoviesActions.Actions): State {
  switch (action.type) {
    case MoviesActions.actionTypes.SET_MOVIES: {
      const act = action as MoviesActions.SetMovies;
      return Object.assign({}, state, { movies: act.payload });
    }
    default: {
      return state;
    }
  }
}

export const getMoviesCollection = (state: State): any => { return state.movies; };
