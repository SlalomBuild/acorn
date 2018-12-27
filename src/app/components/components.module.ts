import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import * as components from './';

/*
  Rather than requiring a list of every component in the project to be maintained here,
  import the whole directory and dynamically add it to our imports/providers
*/
export const componentsArray = [
];

const addComponents = c => {
  const componentNames = Object.keys(c);
  componentNames.forEach(n => componentsArray.push(c[n]));
};

addComponents(components);

/**
 * Contains sharable components accessible to all containers in the application
 * @export
 * @class ComponentsModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ componentsArray ],
  exports: [ componentsArray ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
