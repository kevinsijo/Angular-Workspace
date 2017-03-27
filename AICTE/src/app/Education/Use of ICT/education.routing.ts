import {Routes, RouterModule} from "@angular/router";
import {UseofictComponent} from "./useofict.component";


const EDUCATION_ROUTES: Routes = [
  { path: '', component: UseofictComponent, children: [
    { path: '', component: UseofictComponent },
  ]}
];

export const educationRouting = RouterModule.forChild(EDUCATION_ROUTES);

