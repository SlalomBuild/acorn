import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageContainer, SamplePageContainer } from 'app/containers';

const routes: Routes = [
  { path: '', component: HomePageContainer },
  { path: 'sample', component: SamplePageContainer },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
