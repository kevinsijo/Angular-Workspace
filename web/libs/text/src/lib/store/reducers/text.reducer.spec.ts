import { TextLoaded } from '../actions/text.actions';
import { TextState, Entity, initialState, textReducer } from './text.reducer';

describe('Text Reducer', () => {
   const getTextId = it => it['id'];
   let createText;

   beforeEach(() => {
      createText = (id: string, name = ''): Entity => ({
         id,
         name: name || `name-${id}`
      });
   });

   describe('valid Text actions ', () => {
      it('should return set the list of known Text', () => {
         const texts = [createText('PRODUCT-AAA'), createText('PRODUCT-zzz')];
         const action = new TextLoaded(texts);
         const result: TextState = textReducer(initialState, action);
         const selId: string = getTextId(result.list[1]);

         expect(result.loaded).toBe(true);
         expect(result.list.length).toBe(2);
         expect(selId).toBe('PRODUCT-zzz');
      });
   });

   describe('unknown action', () => {
      it('should return the initial state', () => {
         const action = {} as any;
         const result = textReducer(initialState, action);

         expect(result).toBe(initialState);
      });
   });
});
