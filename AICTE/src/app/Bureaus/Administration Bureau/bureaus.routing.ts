import {Routes, RouterModule} from "@angular/router";
import {AdminbComponent} from "./adminb.component";


const BUREAUS_ROUTES: Routes = [
  { path: '', component: AdminbComponent, children: [
    { path: '', component: AdminbComponent },
  ]}
];

export const bureausRouting = RouterModule.forChild(BUREAUS_ROUTES);

