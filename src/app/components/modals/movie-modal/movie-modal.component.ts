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
      description: ['', [ Validators.required ]]
    });
  }

  ngOnChanges() {
    this.movieForm.patchValue(this.movie);
  }

  updateMovie() {
    this.onUpdate.emit(this.movieForm.value);
  }
}
