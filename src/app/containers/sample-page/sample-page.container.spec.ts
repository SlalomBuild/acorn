import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SamplePageContainer } from './sample-page.container';

describe('SamplePageContainer', () => {
  let component: SamplePageContainer;
  let fixture: ComponentFixture<SamplePageContainer>;
  let dispatch, select;

  beforeEach(() => {
    // set dispatch/select values here so that the spies reset between tests
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
      declarations: [ SamplePageContainer ],
      providers: [ storeProvider ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
