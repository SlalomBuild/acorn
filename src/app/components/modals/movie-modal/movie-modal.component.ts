import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Movie } from 'app/models';

@Component({
  selector: 'movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent {
  @Input() movie: Movie;
  @Output() onUpdate = new EventEmitter<Movie>();

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
    this.onUpdate.emit(this.movieForm.value);
  }
}
