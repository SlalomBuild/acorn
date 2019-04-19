import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '../http-client';
import serviceEndpoints from '../endpoints';
import { Movie } from 'app/models';

@Injectable()
export class MoviesService {
  constructor(public http: HttpClient) { }

  getMoviesCollection(): Observable<Movie[]> {
    return this.http.get(serviceEndpoints.movies())
      .map(res => res.json().data.movies.map((m) => new Movie(m)));
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get(serviceEndpoints.movie(id))
      .map(res => new Movie(res.json().data.movie));
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put(serviceEndpoints.movie(movie.id), {movie})
      .map(res => new Movie(res.json().data.movie));
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post(serviceEndpoints.movies(), {movie})
      .map(res => new Movie(res.json().data.movie));
  }

  deleteMovie(id: string): Observable<void> {
    return this.http.delete(serviceEndpoints.movie(id))
      .map(res => undefined);
  }
}
