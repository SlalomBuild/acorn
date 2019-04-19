import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from 'app/models';

@Component({
  selector: 'movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent {
  @Input() movie: Movie;
  @Output() onUpdate = new EventEmitter<Movie>();
}
