import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SampleComponent } from './sample.component';
import { SampleActions } from 'app/actions';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
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
      declarations: [ SampleComponent ],
      providers: [ storeProvider ]
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should dispatch a SampleActions.RequestSampleData', () => {
    // ngOnInit is called when component is created
    expect(dispatch).toHaveBeenCalledWith(new SampleActions.RequestSampleData());
  });

  it('ngOnDestroy should unsubscribe', () => {
    component.sampleCollectionSubscription.unsubscribe = jasmine.createSpy('unsubscribe');
    component.ngOnDestroy();
    expect(component.sampleCollectionSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('onSampleUpdate should safely escape on nulls', () => {
    component.sampleCollection = null;
    component.onSampleUpdate(undefined);
    expect(component.sampleCollection).toEqual(null);
  });

  it('onSampleUpdate should update appropriate properties', () => {
    component.sampleCollection = null;
    const newCollection = {
      collection: [
        { a: 1 },
        { a: 2 }
      ],
      size: 2,
      pageSize: 25,
      page: 1
    };
    component.onSampleUpdate(newCollection);
    expect(component.sampleCollection).toEqual(newCollection);
    expect(component.currentPageStart).toEqual(1);
    expect(component.currentPageEnd).toEqual(2);
  });

  it('onSampleUpdate should use the page boundary for currentPageEnd if it is greater than size', () => {
    component.sampleCollection = null;
    const newCollection = {
      collection: [],
      size: 200,
      pageSize: 25,
      page: 2
    };
    component.onSampleUpdate(newCollection);
    expect(component.currentPageStart).toEqual(26);
    expect(component.currentPageEnd).toEqual(50);
  });
});
