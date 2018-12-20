import { Action } from '@ngrx/store';
import { Entity } from '../reducers/text.reducer';

export enum TextActionTypes {
   LoadText = '[Text] Load Text',
   TextLoaded = '[Text] Text Loaded',
   TextLoadError = '[Text] Text Load Error'
}

export class LoadText implements Action {
   readonly type = TextActionTypes.LoadText;
}

export class TextLoadError implements Action {
   readonly type = TextActionTypes.TextLoadError;
   constructor(public payload: any) {}
}

export class TextLoaded implements Action {
   readonly type = TextActionTypes.TextLoaded;
   constructor(public payload: Entity[]) {}
}

export type TextAction = LoadText | TextLoaded | TextLoadError;

export const fromTextActions = {
   LoadText,
   TextLoaded,
   TextLoadError
};
