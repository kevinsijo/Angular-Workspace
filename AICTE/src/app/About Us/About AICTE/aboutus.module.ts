import { NgModule } from '@angular/core';

import { Temp1Component } from '../../Shared/temp1.component';
import { Temp2Component } from '../../Shared/temp2.component';
import { aboutusRouting } from "./aboutus.routing";
import { ActComponent } from './act.component';
import { AbaicteComponent } from './abaicte.component';
import { AbaicteStartComponent } from './abaicte-start.component';
import { DelegationComponent } from './delegation.component';
import { LegalproceduresComponent } from './legalprocedures.component';
import { VigilanceproceduresComponent } from './vigilanceprocedures.component';
import { OfficeproceduresComponent } from './officeprocedures.component';

@NgModule({
    imports: [aboutusRouting],
    exports: [],
    declarations: [ActComponent,AbaicteComponent, Temp1Component, Temp2Component, AbaicteStartComponent, DelegationComponent, LegalproceduresComponent, VigilanceproceduresComponent, OfficeproceduresComponent],
    providers: [],
})
export class AboutusModule { }

