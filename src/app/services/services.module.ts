import { NgModule } from '@angular/core';

import {
  HttpClient,
  MoviesService,
  ConfigService,
} from 'app/services';
const services = [
  HttpClient,
  MoviesService,
  ConfigService,
];

@NgModule({
  providers: [ services ]
})
export class ServicesModule { }
