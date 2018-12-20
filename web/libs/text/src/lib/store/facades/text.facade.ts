import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TextPartialState } from '../reducers/text.reducer';
import { textQuery } from '../selectors/text.selectors';
import { LoadText } from '../actions/text.actions';

@Injectable()
export class TextFacade {
   loaded$ = this.store.pipe(select(textQuery.getLoaded));
   allText$ = this.store.pipe(select(textQuery.getAllText));
   selectedText$ = this.store.pipe(select(textQuery.getSelectedText));

   constructor(private store: Store<TextPartialState>) {}

   loadAll() {
      this.store.dispatch(new LoadText());
   }
}
