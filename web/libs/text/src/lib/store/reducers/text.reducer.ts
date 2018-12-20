import { TextAction, TextActionTypes } from '../actions/text.actions';

export const TEXT_FEATURE_KEY = 'text';

/**
 * Interface for the 'Text' data used in
 *  - TextState, and
 *  - textReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface TextState {
   list: Entity[]; // list of Text; analogous to a sql normalized table
   selectedId?: string | number; // which Text record has been selected
   loaded: boolean; // has the Text list been loaded
   error?: any; // last none error (if any)
}

export interface TextPartialState {
   readonly [TEXT_FEATURE_KEY]: TextState;
}

export const initialState: TextState = {
   list: [],
   loaded: false
};

export function textReducer(
   state: TextState = initialState,
   action: TextAction
): TextState {
   switch (action.type) {
      case TextActionTypes.TextLoaded: {
         state = {
            ...state,
            list: action.payload,
            loaded: true
         };
         break;
      }
   }
   return state;
}
