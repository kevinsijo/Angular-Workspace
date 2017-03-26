import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {DecComponent} from "./dec.component";
import {AppComponent} from "./app.component";
import {FacComponent} from "./fac.component";
import {DatadrivenComponent} from "./datadriven/datadriven.component";
import {ChartComponent} from "./chart.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'developer', component: DecComponent },
  { path: 'faculty', component: FacComponent },
  { path: 'form', component: DatadrivenComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
