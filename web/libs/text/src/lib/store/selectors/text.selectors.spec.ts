import { Entity, TextState } from '../reducers/text.reducer';
import { textQuery } from './text.selectors';

describe('Text Selectors', () => {
   const ERROR_MSG = 'No Error Available';
   const getTextId = it => it['id'];

   let storeState;

   beforeEach(() => {
      const createText = (id: string, name = ''): Entity => ({
         id,
         name: name || `name-${id}`
      });
      storeState = {
         text: {
            list: [
               createText('PRODUCT-AAA'),
               createText('PRODUCT-BBB'),
               createText('PRODUCT-CCC')
            ],
            selectedId: 'PRODUCT-BBB',
            error: ERROR_MSG,
            loaded: true
         }
      };
   });

   describe('Text Selectors', () => {
      it('getAllText() should return the list of Text', () => {
         const results = textQuery.getAllText(storeState);
         const selId = getTextId(results[1]);

         expect(results.length).toBe(3);
         expect(selId).toBe('PRODUCT-BBB');
      });

      it('getSelectedText() should return the selected Entity', () => {
         const result = textQuery.getSelectedText(storeState);
         const selId = getTextId(result);

         expect(selId).toBe('PRODUCT-BBB');
      });

      it("getLoaded() should return the current 'loaded' status", () => {
         const result = textQuery.getLoaded(storeState);

         expect(result).toBe(true);
      });

      it("getError() should return the current 'error' storeState", () => {
         const result = textQuery.getError(storeState);

         expect(result).toBe(ERROR_MSG);
      });
   });
});
