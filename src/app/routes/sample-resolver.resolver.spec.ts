import { TestBed, async, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { SampleResolver } from './sample-resolver.resolver';
import { SampleActions } from 'app/actions';

describe('SampleResolver', () => {
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
      providers: [SampleResolver, storeProvider]
    });
  });

  it('resolve should dispatch a RequestSampleData', inject([SampleResolver], (resolver: SampleResolver) => {
    resolver.resolve();
    expect(dispatch).toHaveBeenCalledWith(new SampleActions.RequestSampleData());
  }));
});
