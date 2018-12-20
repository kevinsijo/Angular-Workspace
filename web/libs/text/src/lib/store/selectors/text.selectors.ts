import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TEXT_FEATURE_KEY, TextState } from '../reducers/text.reducer';

// Lookup the 'Text' feature state managed by NgRx
const getTextState = createFeatureSelector<TextState>(TEXT_FEATURE_KEY);

const getLoaded = createSelector(
   getTextState,
   (state: TextState) => state.loaded
);
const getError = createSelector(
   getTextState,
   (state: TextState) => state.error
);

const getAllText = createSelector(
   getTextState,
   getLoaded,
   (state: TextState, isLoaded) => {
      return isLoaded ? state.list : [];
   }
);
const getSelectedId = createSelector(
   getTextState,
   (state: TextState) => state.selectedId
);
const getSelectedText = createSelector(
   getAllText,
   getSelectedId,
   (text, id) => {
      const result = text.find(it => it['id'] === id);
      return result ? Object.assign({}, result) : undefined;
   }
);

export const textQuery = {
   getLoaded,
   getError,
   getAllText,
   getSelectedText
};
