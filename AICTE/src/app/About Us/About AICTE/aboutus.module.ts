/**
 * Created by adhri on 25-03-2017.
 */
import { NgModule } from '@angular/core';

import { Temp1Component } from '../../Shared/temp1.component';
import { Temp2Component } from '../../Shared/temp2.component';
import { aboutusRouting } from "./aboutus.routing";
import { ThirdlayerComponent } from './thirdlayer.component';
import { AbaicteComponent } from './abaicte.component';
import { AbaicteStartComponent } from './abaicte-start.component';

@NgModule({
    imports: [aboutusRouting],
    exports: [],
    declarations: [ThirdlayerComponent,AbaicteComponent, Temp1Component, Temp2Component, AbaicteStartComponent],
    providers: [],
})
export class AboutusModule { }

