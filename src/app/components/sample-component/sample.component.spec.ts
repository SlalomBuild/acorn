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

  it('ngOnChanges should only call onSampleUpdate if sampleData was changed', () => {
    component.onSampleUpdate = jasmine.createSpy('onSampleUpdate');
    component.ngOnChanges();
    expect(component.onSampleUpdate).not.toHaveBeenCalled();
    component.ngOnChanges({
      sampleData: new SimpleChange(null, {}, false)
    });
    expect(component.onSampleUpdate).toHaveBeenCalled();
  });

  it('onSampleUpdate should safely escape on nulls', () => {
    component.sampleData = null;
    component.onSampleUpdate();
    expect(component.sampleData).toEqual(null);
  });

  it('onSampleUpdate should update appropriate properties', () => {
    const newCollection = {
      collection: [
        { a: 1 },
        { a: 2 }
      ],
      size: 2,
      pageSize: 25,
      page: 1
    };
    component.sampleData = newCollection;
    component.onSampleUpdate();
    expect(component.sampleData).toEqual(newCollection);
    expect(component.currentPageStart).toEqual(1);
    expect(component.currentPageEnd).toEqual(2);
  });

  it('onSampleUpdate should use the page boundary for currentPageEnd if it is greater than size', () => {
    const newCollection = {
      collection: [],
      size: 200,
      pageSize: 25,
      page: 2
    };
    component.sampleData = newCollection;
    component.onSampleUpdate();
    expect(component.currentPageStart).toEqual(26);
    expect(component.currentPageEnd).toEqual(50);
  });
});
