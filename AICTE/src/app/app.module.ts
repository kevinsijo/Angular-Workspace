import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavhomeComponent } from './navhome.component';
import { routing} from './app.routing';
import { Temp1Component } from './Shared/temp1.component';
import { AbaicteComponent } from './About Us/abaicte.component';
import { RegoffComponent } from './About Us/regoff.component';
import { FacComponent } from './About Us/fac.component';
import { Temp2Component } from './Shared/temp2.component';
import { AdminbComponent } from './Bureaus/adminb.component';
import { AcadbComponent } from './Bureaus/acadb.component';
import { PquesComponent } from './Bureaus/pques.component';
import { FinbComponent } from './Bureaus/finb.component';
import { AppbComponent } from './Bureaus/appb.component';
import { PcbComponent } from './Bureaus/pcb.component';
import { RifdComponent } from './Bureaus/rifd.component';
import { AntiragComponent } from './Grievance/antirag.component';
import { RtiComponent } from './Grievance/rti.component';
import { CvcComponent } from './Grievance/cvc.component';
import { PubgrievComponent } from './Grievance/pubgriev.component';
import { ScstcellComponent } from './Grievance/scstcell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavhomeComponent,
    Temp1Component,
    AbaicteComponent,
    RegoffComponent,
    FacComponent,
    Temp2Component,
    AdminbComponent,
    AcadbComponent,
    PquesComponent,
    FinbComponent,
    AppbComponent,
    PcbComponent,
    RifdComponent,
    AntiragComponent,
    RtiComponent,
    CvcComponent,
    PubgrievComponent,
    ScstcellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
