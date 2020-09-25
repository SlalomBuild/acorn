import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, Action } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs';

import { ApplicationEffects } from 'app/effects';
import { ApplicationActions, MoviesActions } from 'app/actions';

describe('Application Effects', () => {
  let effects: ApplicationEffects;
  let actions: ReplaySubject<any>;
  let dispatch;

  beforeEach(() => {
    dispatch = jasmine.createSpy('dispatch');
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch
      }
    };

    TestBed.configureTestingModule({
      providers: [
        ApplicationEffects,
        provideMockActions(() => actions),
        storeProvider
      ],
    });

    effects = TestBed.get(ApplicationEffects);
  });

  it('setLoadingFlag should set a loading flag to true when a request goes out', () => {
    const mockData = 'test';
    actions = new ReplaySubject(1);
    const action = new MoviesActions.RequestMovies();
    actions.next(action);

    effects.setLoadingFlag$.subscribe(() => {
      expect(dispatch).toHaveBeenCalledWith(new ApplicationActions.SetLoadingFlag(action.type, true));
    });
  });

  it('setLoadingFlag should set a loading flag to false when a value is set and a corresponding request action exists', () => {
    actions = new ReplaySubject(1);
    const action = new MoviesActions.SetMovies([]);
    const expectedActionType = (new MoviesActions.RequestMovies()).type;
    actions.next(action);

    effects.setLoadingFlag$.subscribe(() => {
      expect(dispatch).toHaveBeenCalledWith(new ApplicationActions.SetLoadingFlag(expectedActionType, false));
    });
  });

  it('setLoadingFlag should dispatch nothing if it was called by a "setter" with no "requester"', () => {
    actions = new ReplaySubject(1);
    const action = new ApplicationActions.SetLoadingFlag('fake', false);
    actions.next(action);

    effects.setLoadingFlag$.subscribe(() => {
      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  it('setLoadingFlag should dispatch nothing if it was called by neither a setter nor a getter', () => {
    actions = new ReplaySubject(1);
    const action = new ApplicationActions.CloseAllModals();
    actions.next(action);

    effects.setLoadingFlag$.subscribe(() => {
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
