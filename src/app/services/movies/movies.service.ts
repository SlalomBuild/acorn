import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { HttpClient } from '../http-client';
import serviceEndpoints from '../endpoints';
import { Movie } from 'app/models';

@Injectable()
export class MoviesService {
  constructor(public http: HttpClient) { }

  getMoviesCollection(): Observable<Movie[]> {
    return this.http.get<Movie>(serviceEndpoints.movies())
      .map((res: any) => res.map(m => new Movie(m)));
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(serviceEndpoints.movie(id))
      .map(res => new Movie(res));
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(serviceEndpoints.movie(movie.id), movie)
      .map(res => new Movie(res));
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(serviceEndpoints.movies(), movie)
      .map(res => new Movie(res));
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(serviceEndpoints.movie(id));
  }
}
