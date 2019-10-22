import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MovieModalComponent } from './movie-modal.component';
import { Movie } from 'app/models';

describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieModalComponent ],
      providers: [ FormBuilder ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should do nothing if movie was not updated', () => {
    component.ngOnChanges({});
    component.ngOnChanges({ movie: null });
    expect(component.movieForm.value).toEqual({
      id: '',
      title: '',
      description: '',
      releaseDate: ''
    });
  });

  it('ngOnChanges should patch form if movie was provided', () => {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const movie = new Movie({
      id: 1,
      title: 'test movie',
      description: 'desc',
      releaseDate: date
    });
    component.ngOnChanges({
      movie: new SimpleChange(null, movie, false)
    });

    expect(component.movieForm.value).toEqual({
      id: 1,
      title: 'test movie',
      description: 'desc',
      releaseDate: formattedDate
    });
  });

  it('updateMovie should emit onUpdate', () => {
    component.onUpdate.emit = jasmine.createSpy('emit');
    component.updateMovie();
    expect(component.onUpdate.emit).toHaveBeenCalled();
  });
});
