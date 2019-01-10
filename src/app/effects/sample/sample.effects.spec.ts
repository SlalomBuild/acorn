import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs';

import { SampleEffects } from 'app/effects';
import { SampleActions } from 'app/actions';
import { SampleService } from 'app/services';

describe('Sample Effects', () => {
  let effects: SampleEffects;
  let service: SampleService;
  let actions: ReplaySubject<any>;
  let getSampleCollection, dispatch;

  beforeEach(() => {
    getSampleCollection = jasmine.createSpy('getSampleCollection');
    dispatch = jasmine.createSpy('dispatch');
    const serviceProvider = {
      provide: SampleService,
      useValue: {
        getSampleCollection: getSampleCollection
      }
    };
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch
      }
    }

    TestBed.configureTestingModule({
      providers: [
        SampleEffects,
        provideMockActions(() => actions),
        serviceProvider,
        storeProvider
      ],
    });

    effects = TestBed.get(SampleEffects);
  });

  it('requestSampleData should dispatch a SetSampleCollection on success', () => {
    const mockData = {
      collection: [ { a: 1 } ],
      size: 1,
      pageSize: 25,
      page: 1
    };
    getSampleCollection.and.returnValue(Observable.of(mockData))
    actions = new ReplaySubject(1);
    actions.next(SampleActions.RequestSampleData);

    effects.requestSampleData$.subscribe(result => {
      expect(result).toEqual(new SampleActions.SetSampleCollection(mockData));
    });
  });

  it('requestSampleData should do something on error', () => {
    getSampleCollection.and.returnValue(Observable.throw({}));
    actions = new ReplaySubject(1);
    actions.next(SampleActions.RequestSampleData);

    effects.requestSampleData$.subscribe(result => {
      expect(result).toEqual(new SampleActions.SetSampleCollection(null));
    });
  });
});
