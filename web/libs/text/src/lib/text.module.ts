import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
   TEXT_FEATURE_KEY,
   initialState as textInitialState,
   textReducer
} from './store/reducers/text.reducer';
import { TextEffects } from './store/effects/text.effects';
import { TextFacade } from './store/facades/text.facade';

@NgModule({
   imports: [
      CommonModule,

      RouterModule.forChild([
         /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      ]),

      StoreModule.forFeature(TEXT_FEATURE_KEY, textReducer, {
         initialState: textInitialState
      }),

      EffectsModule.forFeature([TextEffects])
   ],
   declarations: [TextComponent],
   exports: [TextComponent],
   providers: [TextFacade]
})
export class TextModule {}
