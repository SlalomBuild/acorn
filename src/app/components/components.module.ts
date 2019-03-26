import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  MoviesTableComponent,
  NavigationBarComponent,
  MovieBuilderComponent,
} from 'app/components';

const components = [
  MoviesTableComponent,
  NavigationBarComponent,
  MovieBuilderComponent,
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
  declarations: [ components, MovieBuilderComponent ],
  exports: [ components ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
