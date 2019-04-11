import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';
import { MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

@Component({
  selector: 'movies-page',
  templateUrl: './movies-page.container.html',
  styleUrls: ['./movies-page.container.scss']
})
export class MoviesPageContainer implements OnInit {
  public moviesCollection: Observable<Movie[]> = null;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.moviesCollection = this.store.select(fromReducers.getMoviesCollection);
  }

  onSubmitMovie(movie: Movie) {
    this.store.dispatch(new MoviesActions.CreateMovie(movie));
  }

}
