import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromReducers from 'app/reducers/store';
import { SampleActions } from 'app/actions';

@Component({
  selector: 'sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.scss']
})
export class SampleComponentComponent implements OnInit {
  public sampleCollection: Observable<any> = null;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new SampleActions.RequestSampleData());
    this.sampleCollection = this.store.select(fromReducers.getSampleCollection);
  }

}
