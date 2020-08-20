import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDisplayComponent } from './config-display.component';

describe('ConfigDisplayComponent', () => {
  let component: ConfigDisplayComponent;
  let fixture: ComponentFixture<ConfigDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDisplayComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
