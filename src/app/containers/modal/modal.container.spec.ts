import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ModalsContainer } from './modal.container';
import { ApplicationActions, MoviesActions } from 'app/actions';
import { Movie } from 'app/models';

describe('ModalContainer', () => {
  let component: ModalsContainer;
  let fixture: ComponentFixture<ModalsContainer>;
  let dispatch, select;

  beforeEach(async(() => {
    dispatch = jasmine.createSpy('dispatch');
    select = jasmine.createSpy('select').and.returnValue(Observable.of([]));
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch: dispatch,
        select: select
      }
    };

    TestBed.configureTestingModule({
      declarations: [ModalsContainer],
      providers: [storeProvider],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('closeAllModals should dispatch a closeAllModals action', () => {
    component.closeAllModals();
    expect(dispatch).toHaveBeenCalledWith(new ApplicationActions.CloseAllModals());
  });

  it('updateMovie should dispatch an updateMovie action', () => {
    const movie = new Movie();
    component.updateMovie(movie);
    expect(dispatch).toHaveBeenCalledWith(new MoviesActions.updateMovie(movie));
  });
});
