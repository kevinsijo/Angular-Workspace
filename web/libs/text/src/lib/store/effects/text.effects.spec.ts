import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { TextEffects } from './text.effects';
import { LoadText, TextLoaded } from '../actions/text.actions';

describe('TextEffects', () => {
   let actions: Observable<any>;
   let effects: TextEffects;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            NxModule.forRoot(),
            StoreModule.forRoot({}),
            EffectsModule.forRoot([])
         ],
         providers: [
            TextEffects,
            DataPersistence,
            provideMockActions(() => actions)
         ]
      });

      effects = TestBed.get(TextEffects);
   });

   describe('loadText$', () => {
      it('should work', () => {
         actions = hot('-a-|', { a: new LoadText() });
         expect(effects.loadText$).toBeObservable(
            hot('-a-|', { a: new TextLoaded([]) })
         );
      });
   });
});
