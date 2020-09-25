import { NgModule } from '@angular/core';

import {
  HttpService,
  MoviesService,
  ConfigService,
} from 'app/services';
const services = [
  HttpService,
  MoviesService,
  ConfigService,
];

@NgModule({
  providers: [ services ]
})
export class ServicesModule { }
