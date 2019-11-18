import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageContainer, MoviesPageContainer } from 'app/containers';

// TODO: consider moving to sub-folder so we can do a group import as these get added
import { MoviesResolver } from './resolvers';

const routes: Routes = [
  { path: '', component: HomePageContainer },
  {
    path: 'movies',
    component: MoviesPageContainer,
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
