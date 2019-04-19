import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ModalComponent } from './modal.component';
import { ApplicationActions } from 'app/actions';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let dispatch;

  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch: dispatch,
      }
    };
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ storeProvider ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('closeAllModals should dispatch a closeAllModals action', () => {
    component.closeAllModals();
    expect(dispatch).toHaveBeenCalledWith(new ApplicationActions.CloseAllModals());
  });
});
