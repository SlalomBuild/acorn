import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageContainer, SamplePageContainer } from 'app/containers';

// TODO: consider moving to sub-folder so we can do a group import as these get added
import { SampleResolver } from './sample-resolver.resolver';

const routes: Routes = [
  { path: '', component: HomePageContainer },
  {
    path: 'sample',
    component: SamplePageContainer,
    resolve: {
      data: SampleResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
