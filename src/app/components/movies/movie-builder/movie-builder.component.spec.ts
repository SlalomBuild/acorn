import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBuilderComponent } from './movie-builder.component';

describe('MovieBuilderComponent', () => {
  let component: MovieBuilderComponent;
  let fixture: ComponentFixture<MovieBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBuilderComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
