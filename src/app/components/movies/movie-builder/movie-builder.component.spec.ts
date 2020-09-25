import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';

import { MovieBuilderComponent } from './movie-builder.component';
import { Movie } from 'app/models';

describe('MovieBuilderComponent', () => {
  let component: MovieBuilderComponent;
  let fixture: ComponentFixture<MovieBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ MovieBuilderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should do nothing if movie was not updated', () => {
    const date = new Date();
    component.movieForm.setValue({
      title: 'test title',
      description: 'test desc',
      releaseDate: date
    });
    component.ngOnChanges({});
    component.ngOnChanges({ movies: null });
    expect(component.movieForm.value).toEqual({
      title: 'test title',
      description: 'test desc',
      releaseDate: date
    });
  });

  it('ngOnChanges should clear form if the movies array was updated', () => {
    const date = new Date();
    const movie = new Movie({
      title: 'test movie',
      description: 'desc',
      releaseDate: date
    });
    component.ngOnChanges({
      movies: new SimpleChange(null, [movie], false)
    });

    expect(component.movieForm.value).toEqual({
      title: null,
      description: null,
      releaseDate: null
    });
  });

  it('submit should emit submitMovie if form is valid', () => {
    component.submitMovie.emit = jasmine.createSpy('emit');
    component.submit();
    expect(component.submitMovie.emit).not.toHaveBeenCalled();

    const date = new Date();
    const movie = new Movie({
      title: 'test movie',
      description: 'desc',
      releaseDate: date
    });
    component.movieForm.patchValue(movie);
    component.submit();
    expect(component.submitMovie.emit).toHaveBeenCalled();
  });
});
