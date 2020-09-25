import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Movie } from 'app/models';

@Component({
  selector: 'app-movie-builder',
  templateUrl: './movie-builder.component.html',
  styleUrls: ['./movie-builder.component.scss']
})
export class MovieBuilderComponent implements OnChanges {
  @Input() movies: Movie[];
  @Output() submitMovie = new EventEmitter<Movie>();
  @ViewChild('title', { static: false }) title: ElementRef;

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
