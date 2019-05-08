import { NgModule } from '@angular/core';

import {
  HttpClient,
  MoviesService,
} from 'app/services';
const services = [
  HttpClient,
  MoviesService,
];

@NgModule({
  providers: [ services ]
})
export class ServicesModule { }
