import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Movie } from 'app/models';

@Component({
  selector: 'movie-builder',
  templateUrl: './movie-builder.component.html',
  styleUrls: ['./movie-builder.component.scss']
})
export class MovieBuilderComponent {
  @Input() movies: Movie[];
  @Output() submitMovie = new EventEmitter<Movie>();
  @ViewChild('title') title: ElementRef;

  movieForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.movieForm = fb.group({
      title: ['', [ Validators.required ]],
      description: ['', [ Validators.required ]],
      releaseDate: ['', [ Validators.required ]]
    });
  }

  ngOnChanges(changes) {
    const movies = changes.movies && changes.movies.currentValue;
    if (movies) {
      this.movieForm.reset();
      setTimeout(() => this.title.nativeElement.focus(), 10);
    }
  }

  submit() {
    if (this.movieForm.invalid) {
      return;
    }
    this.submitMovie.emit(new Movie(this.movieForm.value));
  }
}
