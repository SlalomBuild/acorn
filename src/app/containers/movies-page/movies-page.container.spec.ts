import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { MoviesPageComponent } from './movies-page.container';
import { ApplicationActions, MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

describe('MoviesPageComponent', () => {
  let component: MoviesPageComponent;
  let fixture: ComponentFixture<MoviesPageComponent>;
  let dispatch, select;

  beforeEach(() => {
    // set dispatch/select values here so that the spies reset between tests
    dispatch = jasmine.createSpy('dispatch');
    select = jasmine.createSpy('select').and.returnValue(of([]));
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch: dispatch,
        select: select
      }
    };
    TestBed.configureTestingModule({
      declarations: [ MoviesPageComponent ],
      providers: [ storeProvider ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmitMovie should submit movie as the payload of a CreateMovie action', () => {
    const movie = new Movie({ id: 5 });
    component.onSubmitMovie(movie);
    expect(dispatch).toHaveBeenCalledWith(new MoviesActions.CreateMovie(movie));
  });

  it('onUpdateMovie should request movie details and open modal', () => {
    component.onUpdateMovie(5);
    expect(dispatch).toHaveBeenCalledWith(new MoviesActions.RequestMovie(5));
    expect(dispatch).toHaveBeenCalledWith(new ApplicationActions.OpenModal('movie'));
  });

  it('onDeleteMovie should submit movie as the payload of a CreateMovie action', () => {
    component.onDeleteMovie(5);
    expect(dispatch).toHaveBeenCalledWith(new MoviesActions.DeleteMovie(5));
  });
});
