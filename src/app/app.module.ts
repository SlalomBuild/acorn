import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


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
    ServicesModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
