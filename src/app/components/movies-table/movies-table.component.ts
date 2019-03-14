import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { get } from 'lodash';

import { Movie } from 'app/models';

@Component({
  selector: 'movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent {
  @Input() movies: Movie[];

  public currentPageStart: number = null;
  public currentPageEnd: number = null;

  ngOnChanges(changes?: SimpleChanges): void {
    // only run update logic if the property in question has been updated
    const movies = get(changes, 'movies.currentValue');
    if (movies) {
      this.onMoviesUpdate();
    }
  }

  // TODO: implement paging
  onMoviesUpdate(): void {
    if (!this.movies) {
      return;
    }

    // this.currentPageStart = (this.movies.page - 1) * this.movies.pageSize + 1;
    // const pageEnd = this.movies.page * this.movies.pageSize;
    // this.currentPageEnd = pageEnd < this.movies.size ? pageEnd : this.movies.size;
  }
}
