import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AbaicteComponent} from "./About Us/abaicte.component";
import {FacComponent} from "./About Us/fac.component";
import {RegoffComponent} from "./About Us/regoff.component";
import {AdminbComponent} from "./Bureaus/adminb.component";
import {AcadbComponent} from "./Bureaus/acadb.component";
import {AppbComponent} from "./Bureaus/appb.component";
import {FinbComponent} from "./Bureaus/finb.component";
import {PcbComponent} from "./Bureaus/pcb.component";
import {PquesComponent} from "./Bureaus/pques.component";
import {RifdComponent} from "./Bureaus/rifd.component";
import {AntiragComponent} from "./Grievance/antirag.component";
import {CvcComponent} from "./Grievance/cvc.component";
import {PubgrievComponent} from "./Grievance/pubgriev.component";
import {RtiComponent} from "./Grievance/rti.component";
import {ScstcellComponent} from "./Grievance/scstcell.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutAICTE', component: AbaicteComponent },
  { path: 'faculty', component: FacComponent },
  { path: 'regional_office', component: RegoffComponent },
  { path: 'administration_bureau', component: AdminbComponent},
  { path: 'academic_bureau', component: AcadbComponent},
  { path: 'approvals_bureau', component: AppbComponent},
  { path: 'finance_bureau', component: FinbComponent},
  { path: 'planning_and_coordination_bureau', component: PcbComponent},
  { path: 'parliament_questions', component: PquesComponent},
  { path: 'rifd', component: RifdComponent},
  { path: 'anti_ragging', component: AntiragComponent},
  { path: 'central_vigilance_commission', component: CvcComponent},
  { path: 'public_grievance', component: PubgrievComponent},
  { path: 'right_to_information', component: RtiComponent},
  { path: 'sc_st_cell', component: ScstcellComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
