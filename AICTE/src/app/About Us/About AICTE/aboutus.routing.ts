
import {Routes, RouterModule} from "@angular/router";
import {AbaicteComponent} from "./abaicte.component";
import {ActComponent} from "./act.component";
import {AbaicteStartComponent} from "./abaicte-start.component";
import {DelegationComponent} from "./delegation.component";

const ABOUTUS_ROUTES: Routes = [
  { path: '', component: AbaicteStartComponent, children: [
    { path: '', component: AbaicteComponent },
    { path: 'act', component: ActComponent },
    { path: 'delegation', component: DelegationComponent },
  ]}
];

export const aboutusRouting = RouterModule.forChild(ABOUTUS_ROUTES);

