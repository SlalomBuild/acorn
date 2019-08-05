import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

import { reducers } from 'app/reducers/store';

import {
  ApplicationEffects,
  MoviesEffects,
} from 'app/effects';

const effects = [
  ApplicationEffects,
  MoviesEffects,
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers: [storeFreeze] }),
    EffectsModule.forRoot(effects)
  ]
})
export class AppStoreModule { }
