import { Component, Output, EventEmitter } from '@angular/core';

import { Movie } from 'app/models';

@Component({
  selector: 'app-movie-builder',
  templateUrl: './movie-builder.component.html',
  styleUrls: ['./movie-builder.component.scss']
})
export class MovieBuilderComponent {
  @Output() submitMovie = new EventEmitter<Movie>();
}
