import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';
import { ApplicationActions, MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.container.html',
  styleUrls: ['./movies-page.container.scss']
})
export class MoviesPageComponent implements OnInit {
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

  onUpdateMovie(id: number) {
    this.store.dispatch(new MoviesActions.RequestMovie(id));
    this.store.dispatch(new ApplicationActions.OpenModal('movie'));
  }

  onDeleteMovie(id: number) {
    this.store.dispatch(new MoviesActions.DeleteMovie(id));
  }
}
