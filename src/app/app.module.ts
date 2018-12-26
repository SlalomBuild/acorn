import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components Module
import { ComponentsModule } from './components/components.module';

import * as effects from './effects';
import * as resolvers from './resolvers';
import * as services from './services';

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

addConstruct(effects, effectsArray, EffectsModule.run);
addConstruct(services, servicesArray);

@NgModule({
  declarations: [
    AppComponent,
    ...effectsArray
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    resolversArray,
    servicesArray
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
