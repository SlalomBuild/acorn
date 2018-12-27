import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromReducers from 'app/reducers/store';
import { SampleActions } from 'app/actions';

@Component({
  selector: 'sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.scss']
})
export class SampleComponentComponent implements OnInit {
  public sampleCollectionSubscription: Subscription = null;
  public sampleCollection: any = null;
  public currentPageStart: number = null;
  public currentPageEnd: number = null;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new SampleActions.RequestSampleData());
    this.sampleCollectionSubscription = this.store.select(fromReducers.getSampleCollection)
      .subscribe(this.onSampleUpdate.bind(this));
  }

  ngOnDestroy(): void {
    this.sampleCollectionSubscription.unsubscribe();
  }

  onSampleUpdate(collection: any): void {
    if (!collection) {
      return;
    }

    this.sampleCollection = collection;
    this.currentPageStart = (collection.page - 1) * collection.pageSize + 1;
    const pageEnd = collection.page * collection.pageSize;
    this.currentPageEnd = pageEnd < collection.size ? pageEnd : collection.size;
  }
}
