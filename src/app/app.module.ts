import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { AppRoutingModule } from 'app/routes';
import { AppComponent } from './app.component';

// Components Module
import { ComponentsModule } from 'app/components/components.module';
import { AppStoreModule } from 'app/app-store.module';
import { ServicesModule } from 'app/services/services.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ComponentsModule,
    AppStoreModule,
    ServicesModule, 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
