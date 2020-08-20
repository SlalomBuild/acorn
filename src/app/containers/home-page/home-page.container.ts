import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromReducers from 'app/reducers/store';

import { ConfigActions } from 'app/actions';
import { Config } from 'app/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.container.html',
  styleUrls: ['./home-page.container.scss']
})
export class HomePageContainer implements OnInit {
  title = 'Acorn js';
  config: Observable<Config> = null;

  constructor(
    public store: Store<fromReducers.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new ConfigActions.RequestConfig());
    this.config = this.store.select(fromReducers.getConfig);
  }

}
