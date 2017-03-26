import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavhomeComponent } from './navhome.component';
import { routing} from './app.routing';
import { RegoffComponent } from './About Us/Regional Office/regoff.component';
import { FacComponent } from './About Us/Faculty/fac.component';
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
    RegoffComponent,
    FacComponent,
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
