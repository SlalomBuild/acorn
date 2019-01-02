import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromReducers from 'app/reducers/store';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.container.html',
  styleUrls: ['./sample-page.container.scss']
})
export class SamplePageContainer implements OnInit {
  public sampleCollection: Observable<any> = null;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.sampleCollection = this.store.select(fromReducers.getSampleCollection);
  }

}
