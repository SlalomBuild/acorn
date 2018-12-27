import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components Module
import { ComponentsModule } from 'app/components/components.module';

import { reducers } from 'app/reducers/store';
import * as effects from 'app/effects';
import * as services from 'app/services';


/*
  Rather than requiring a list of every service/effect/resolver/etc in the project to be
  maintained here, import each directory whole and dynamically add it to our imports/providers
*/
const effectsArray = [];
const servicesArray = [];

const addConstruct = (construct, array, method?) => {
  const constructNames = Object.keys(construct);
  constructNames.forEach(n => {
    if (method) {
      array.push(method(construct[n]));
    } else {
      array.push(construct[n]);
    }
  });
};

addConstruct(effects, effectsArray, (e) => EffectsModule.forRoot([e]));
addConstruct(services, servicesArray);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot(reducers, { metaReducers: [storeFreeze] }),
    ...effectsArray
  ],
  providers: [
    servicesArray
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
