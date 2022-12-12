import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { calculationReducer } from './calculation.reducer';
import { mortgageRangesReducer } from './mortgage-ranges.reducer';
import { userInputReducer } from './user-input.reducer';

const state = {
  calculation: calculationReducer,
  userInput: userInputReducer,
  mortgageRanges: mortgageRangesReducer,
};
@NgModule({
  imports: [StoreModule.forRoot(state)],
  exports: [StoreModule],
})
export class AppStoreModule {}
