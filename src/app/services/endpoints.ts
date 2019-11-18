import { environment } from 'src/environments/environment';

const CONTEXT = environment.apiDomain;
const API = 'api';

// available api resources
export default {
  movies: () => `${CONTEXT}/${API}/v1/movies`,
  movie: (id) => `${CONTEXT}/${API}/v1/movies/${id}`,
  ratings: () => `${CONTEXT}/${API}/v1/movies/movieIdHere/rating`,
};
