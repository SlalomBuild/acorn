import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  SampleComponent,
  NavigationBarComponent
} from 'app/components';

const components = [
  SampleComponent,
  NavigationBarComponent
];

// Todo: Figure out why dynamic imports work for effects/services, but not components
// https://github.com/angular/angular-cli/issues/13416

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
