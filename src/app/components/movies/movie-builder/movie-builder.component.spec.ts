import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MovieBuilderComponent } from './movie-builder.component';

describe('MovieBuilderComponent', () => {
  let component: MovieBuilderComponent;
  let fixture: ComponentFixture<MovieBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ MovieBuilderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
