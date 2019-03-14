import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  SampleComponent,
  NavigationBarComponent,
} from 'app/components';

const components = [
  SampleComponent,
  NavigationBarComponent,
];

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
  declarations: [ components ],
  exports: [ components ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
