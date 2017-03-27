import { NgModule } from '@angular/core';

import { Temp1Component } from '../../Shared/temp1.component';
import { Temp2Component } from '../../Shared/temp2.component';
import { bureausRouting } from "./bureaus.routing";


@NgModule({
    imports: [bureausRouting],
    exports: [],
    declarations: [Temp1Component, Temp2Component],
    providers: [],
})
export class BureausModule { }

