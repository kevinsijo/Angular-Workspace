import { async, TestBed } from '@angular/core/testing';
import { TextModule } from './text.module';

describe('TextModule', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [TextModule]
      }).compileComponents();
   }));

   it('should create', () => {
      expect(TextModule).toBeDefined();
   });
});
