import { createAction, props } from '@ngrx/store';
import { MortgageCalculation } from './calculation.reducer';
import { GenerateMortgage } from './user-input.reducer';

export const updateUserInput = createAction(
  '[Mortgage Input Page] Update User Input',
  props<{ userInputs: MortgageCalculation }>()
);

export const storeGeneratedMortgage = createAction(
  '[Mortgage Input Page] Store Generated Mortgage',
  props<{ generatedMortgage: GenerateMortgage }>()
);
