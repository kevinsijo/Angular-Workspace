import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import {routing} from "./app.routing";
import { DecComponent } from './dec.component';
import { FacComponent } from './fac.component';
import { ArrComponent } from './arr.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecComponent,
    FacComponent,
    ArrComponent,
    DatadrivenComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
