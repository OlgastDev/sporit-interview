import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { calculationReducer } from './calculation.reducer';
import { mortgageRangesReducer } from './mortgage-ranges.reducer';
import { userInputReducer } from './user-input.reducer';

const state = {
  mortgageCalculation: calculationReducer,
  userInput: userInputReducer,
  mortgageRanges: mortgageRangesReducer,
};
@NgModule({
  imports: [
    StoreModule.forRoot(state),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  exports: [StoreModule],
})
export class AppStoreModule {}
