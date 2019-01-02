import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageContainer } from './sample-page.container';

describe('SamplePageContainer', () => {
  let component: SamplePageContainer;
  let fixture: ComponentFixture<SamplePageContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePageContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
