import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Movie } from 'app/models';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnChanges {
  @Input() movie: Movie;
  @Output() update = new EventEmitter<Movie>();

  movieForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.movieForm = fb.group({
      id: '',
      title: ['', [ Validators.required ]],
      description: ['', [ Validators.required ]],
      releaseDate: ['', [ Validators.required ]]
    });
  }

  ngOnChanges(changes) {
    const movie = changes.movie && changes.movie.currentValue;
    if (movie) {
      this.movieForm.patchValue({
        ...movie,
        // html5 requires iso format with no time
        releaseDate: movie.releaseDate.toISOString().split('T')[0]
      });
    }
  }

  updateMovie() {
    this.update.emit(this.movieForm.value);
  }
}
