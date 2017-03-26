/**
 * Created by adhri on 23-03-2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {AbaicteComponent} from "./abaicte.component";
import {ThirdlayerComponent} from "./thirdlayer.component";
import {AbaicteStartComponent} from "./abaicte-start.component";

const ABOUTUS_ROUTES: Routes = [
  { path: '', component: AbaicteStartComponent, children: [
    { path: '', component: AbaicteComponent },
    { path: 'third', component: ThirdlayerComponent },

  ]}
];

export const aboutusRouting = RouterModule.forChild(ABOUTUS_ROUTES);

