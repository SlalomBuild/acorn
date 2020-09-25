import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  MoviesTableComponent,
  NavigationBarComponent,
  MovieBuilderComponent,
  ModalComponent,
  MovieModalComponent,
  ConfigDisplayComponent,
} from 'app/components';

const components = [
  MoviesTableComponent,
  NavigationBarComponent,
  MovieBuilderComponent,
  ModalComponent,
  MovieModalComponent,
  ConfigDisplayComponent,
];

import {
  HomePageComponent,
  MoviesPageComponent,
  ModalContainerComponent,
} from 'app/containers';

const containers = [
  HomePageComponent,
  MoviesPageComponent,
  ModalContainerComponent,
];

/**
 * Contains sharable components accessible to all containers in the application
 * @export
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ components, containers ],
  exports: [ components, containers ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
