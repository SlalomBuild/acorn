import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { SampleComponent } from './sample.component';
import { SampleActions } from 'app/actions';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should only call onMoviesUpdate if movies was changed', () => {
    component.onMoviesUpdate = jasmine.createSpy('onMoviesUpdate');
    component.ngOnChanges();
    expect(component.onMoviesUpdate).not.toHaveBeenCalled();
    component.ngOnChanges({
      movies: new SimpleChange(null, {}, false)
    });
    expect(component.onMoviesUpdate).toHaveBeenCalled();
  });

  it('onMoviesUpdate should safely escape on nulls', () => {
    component.movies = null;
    component.onMoviesUpdate();
    expect(component.movies).toEqual(null);
  });

  it('onMoviesUpdate should update appropriate properties', () => {
    const newCollection = {
      collection: [
        { a: 1 },
        { a: 2 }
      ],
      size: 2,
      pageSize: 25,
      page: 1
    };
    component.movies = newCollection;
    component.onMoviesUpdate();
    expect(component.movies).toEqual(newCollection);
    expect(component.currentPageStart).toEqual(1);
    expect(component.currentPageEnd).toEqual(2);
  });

  it('onMoviesUpdate should use the page boundary for currentPageEnd if it is greater than size', () => {
    const newCollection = {
      collection: [],
      size: 200,
      pageSize: 25,
      page: 2
    };
    component.movies = newCollection;
    component.onMoviesUpdate();
    expect(component.currentPageStart).toEqual(26);
    expect(component.currentPageEnd).toEqual(50);
  });
});
