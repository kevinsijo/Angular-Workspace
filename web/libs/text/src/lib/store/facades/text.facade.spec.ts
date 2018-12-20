import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { TextEffects } from '../effects/text.effects';
import { TextFacade } from './text.facade';

import { textQuery } from '../selectors/text.selectors';
import { LoadText, TextLoaded } from '../actions/text.actions';
import {
   TextState,
   Entity,
   initialState,
   textReducer
} from '../reducers/text.reducer';

interface TestSchema {
   text: TextState;
}

describe('TextFacade', () => {
   let facade: TextFacade;
   let store: Store<TestSchema>;
   let createText;

   beforeEach(() => {
      createText = (id: string, name = ''): Entity => ({
         id,
         name: name || `name-${id}`
      });
   });

   describe('used in NgModule', () => {
      beforeEach(() => {
         @NgModule({
            imports: [
               StoreModule.forFeature('text', textReducer, { initialState }),
               EffectsModule.forFeature([TextEffects])
            ],
            providers: [TextFacade]
         })
         class CustomFeatureModule {}

         @NgModule({
            imports: [
               NxModule.forRoot(),
               StoreModule.forRoot({}),
               EffectsModule.forRoot([]),
               CustomFeatureModule
            ]
         })
         class RootModule {}
         TestBed.configureTestingModule({ imports: [RootModule] });

         store = TestBed.get(Store);
         facade = TestBed.get(TextFacade);
      });

      /**
       * The initially generated facade::loadAll() returns empty array
       */
      it('loadAll() should return empty list with loaded == true', async done => {
         try {
            let list = await readFirst(facade.allText$);
            let isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(false);

            facade.loadAll();

            list = await readFirst(facade.allText$);
            isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(true);

            done();
         } catch (err) {
            done.fail(err);
         }
      });

      /**
       * Use `TextLoaded` to manually submit list for state management
       */
      it('allText$ should return the loaded list; and loaded flag == true', async done => {
         try {
            let list = await readFirst(facade.allText$);
            let isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(false);

            store.dispatch(
               new TextLoaded([createText('AAA'), createText('BBB')])
            );

            list = await readFirst(facade.allText$);
            isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(2);
            expect(isLoaded).toBe(true);

            done();
         } catch (err) {
            done.fail(err);
         }
      });
   });
});
