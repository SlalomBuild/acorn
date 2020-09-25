import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable, of, throwError } from 'rxjs';

import { ConfigEffects } from 'app/effects';
import { ConfigActions } from 'app/actions';
import { ConfigService } from 'app/services';
import { Config } from 'app/models';

describe('Config Effects', () => {
  let effects: ConfigEffects;
  let actions: ReplaySubject<any>;
  let getConfig, dispatch;

  beforeEach(() => {
    getConfig = jasmine.createSpy('getConfig');
    dispatch = jasmine.createSpy('dispatch');
    const serviceProvider = {
      provide: ConfigService,
      useValue: {
        getConfig: getConfig
      }
    };
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch
      }
    };

    TestBed.configureTestingModule({
      providers: [
        ConfigEffects,
        provideMockActions(() => actions),
        serviceProvider,
        storeProvider
      ],
    });

    effects = TestBed.get(ConfigEffects);
  });

  it('requestConfig should dispatch a SetConfig on success', async(() => {
    const mockData = new Config();
    getConfig.and.returnValue(of(mockData));
    actions = new ReplaySubject(1);
    actions.next(new ConfigActions.RequestConfig());

    effects.requestConfig$.subscribe(result => {
      expect(result).toEqual(new ConfigActions.SetConfig(mockData));
    });
  }));

  it('requestConfig should do something on error', async(() => {
    getConfig.and.returnValue(throwError({}));
    actions = new ReplaySubject(1);
    actions.next(new ConfigActions.RequestConfig());

    effects.requestConfig$.subscribe(result => {
      expect(result).toEqual(new ConfigActions.SetConfig(null));
    });
  }));
});
