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

  public currentPage = 1;
  public pageSize = 25;
  public currentPageStart: number = null;
  public currentPageEnd: number = null;
  public pagedMovies: Movie[];

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

    this.currentPageStart = (this.currentPage - 1) * this.pageSize + 1;
    const pageEnd = this.currentPage * this.pageSize;
    this.currentPageEnd = pageEnd < this.movies.length ? pageEnd : this.movies.length;
  }
}
