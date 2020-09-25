import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { HomePageComponent } from './home-page.container';
import { ConfigDisplayComponent } from 'app/components/config-display';
import { ConfigActions } from 'app/actions';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let dispatch, select;

  beforeEach(async(() => {
    select = jasmine.createSpy('select').and.returnValue(of({}));
    dispatch = jasmine.createSpy('dispatch').and.returnValue(of({}));
    const storeProvider = {
      provide: Store,
      useValue: {
        dispatch,
        select
      }
    };

    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, ConfigDisplayComponent ],
      providers: [ storeProvider ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should dispatch fetchConfig action', () => {
    component.ngOnInit();
    expect(dispatch).toHaveBeenCalledWith(new ConfigActions.RequestConfig());
  });
});
