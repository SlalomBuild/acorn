import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import * as components from './';

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
