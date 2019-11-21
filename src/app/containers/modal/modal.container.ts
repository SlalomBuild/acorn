import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';
import { ApplicationActions, MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

/*
  This container will manage the state/data for all modals in the app.
  By isolating modals this way we should be able to avoid bloat + inconsistencies when interacting with the other containers
*/
@Component({
  selector: 'modal-container',
  templateUrl: './modal.container.html',
  styleUrls: ['./modal.container.scss']
})
export class ModalContainer implements OnInit {
  // open/closed flags
  isMovieOpen$: Observable<boolean>;

  // individual modal data
  movie$: Observable<Movie>;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.isMovieOpen$ = this.store.select(fromReducers.getModal('movie'));
    this.movie$ = this.store.select(fromReducers.getMovie);
  }

  @HostListener('document:keydown.escape', ['$event'])
  closeAllModals() {
    this.store.dispatch(new ApplicationActions.CloseAllModals());
  }

  updateMovie(movie: Movie) {
    this.store.dispatch(new MoviesActions.UpdateMovie(movie));
  }
}
