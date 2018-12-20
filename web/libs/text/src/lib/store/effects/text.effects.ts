import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { TextPartialState } from '../reducers/text.reducer';
import {
   LoadText,
   TextLoaded,
   TextLoadError,
   TextActionTypes
} from '../actions/text.actions';

@Injectable()
export class TextEffects {
   @Effect() loadText$ = this.dataPersistence.fetch(TextActionTypes.LoadText, {
      run: (action: LoadText, state: TextPartialState) => {
         // Your custom REST 'load' logic goes here. For now just return an empty list...
         return new TextLoaded([]);
      },

      onError: (action: LoadText, error) => {
         console.error('Error', error);
         return new TextLoadError(error);
      }
   });

   constructor(
      private actions$: Actions,
      private dataPersistence: DataPersistence<TextPartialState>
   ) {}
}
