import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http-client';
import serviceEndpoints from '../endpoints';
import { Movie } from 'app/models';

@Injectable()
export class MoviesService {
  constructor(public http: HttpService) { }

  getMoviesCollection(): Observable<Movie[]> {
    return this.http.get(serviceEndpoints.movies())
      .map((res: any) => res.map(m => new Movie(m)));
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get(serviceEndpoints.movie(id))
      .map(res => new Movie(res));
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put(serviceEndpoints.movie(movie.id), movie)
      .map(res => new Movie(res));
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post(serviceEndpoints.movies(), movie)
      .map(res => new Movie(res));
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete(serviceEndpoints.movie(id));
  }
}
