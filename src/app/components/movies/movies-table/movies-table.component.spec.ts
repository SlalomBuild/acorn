import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { MoviesTableComponent } from './movies-table.component';
import { MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

describe('MoviesTableComponent', () => {
  let component: MoviesTableComponent;
  let fixture: ComponentFixture<MoviesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTableComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should only call onMoviesUpdate if movies was changed', () => {
    component.onMoviesUpdate = jasmine.createSpy('onMoviesUpdate');
    component.ngOnChanges();
    expect(component.onMoviesUpdate).not.toHaveBeenCalled();
    component.ngOnChanges({
      movies: new SimpleChange(null, {}, false)
    });
    expect(component.onMoviesUpdate).toHaveBeenCalled();
  });

  it('onMoviesUpdate should safely escape on nulls', () => {
    component.movies = null;
    component.onMoviesUpdate();
    expect(component.movies).toEqual(null);
  });

  it('onMoviesUpdate should update appropriate properties', () => {
    const newCollection = [new Movie(), new Movie()];
    component.movies = newCollection;
    component.onMoviesUpdate();
    expect(component.movies).toEqual(newCollection);
    expect(component.currentPageStart).toEqual(1);
    expect(component.currentPageEnd).toEqual(2);
  });

  it('onMoviesUpdate should use the page boundary for currentPageEnd if it is greater than size', () => {
    const newCollection = [];
    for (let i = 0; i < 75; i++) {
      newCollection.push(new Movie());
    }

    component.currentPage = 2;
    component.movies = newCollection;
    component.onMoviesUpdate();
    expect(component.currentPageStart).toEqual(26);
    expect(component.currentPageEnd).toEqual(50);
  });

  it('onMoviesUpdate should update pagedMovies', () => {
    component.pageSize = 5;
    component.movies = [];
    for (let i = 0; i < 10; i++) {
      component.movies.push(new Movie());
    }
    component.onMoviesUpdate();
    expect(component.pagedMovies.length).toEqual(5);
  });

  it('setPage should do nothing if target page is out of bounds', () => {
    component.pageSize = 5;
    component.movies = [];
    for (let i = 0; i < 10; i++) {
      component.movies.push(new Movie());
    }

    component.currentPageStart = 100;
    component.setPage(0);
    expect(component.currentPageStart).toEqual(100);
    component.setPage(100);
    expect(component.currentPageStart).toEqual(100);
  });

  it('setPage should update currentPage', () => {
    component.pageSize = 5;
    component.movies = [];
    for (let i = 0; i < 10; i++) {
      component.movies.push(new Movie());
    }

    component.setPage(2);
    expect(component.pagedMovies.length).toEqual(5);
    expect(component.pagedMovies).toEqual(component.movies.slice(5));
  });

  it('deleteRow should emit deleteMovie', () => {
    component.deleteMovie.emit = jasmine.createSpy('emit');
    component.deleteRow(1);
    expect(component.deleteMovie.emit).toHaveBeenCalledWith(1);
  });
});
