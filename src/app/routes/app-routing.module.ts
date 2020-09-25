import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent, MoviesPageComponent } from 'app/containers';
import { MoviesResolver } from './resolvers';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'movies',
    component: MoviesPageComponent,
    resolve: {
      data: MoviesResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
