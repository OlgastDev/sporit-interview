import { createAction, props } from '@ngrx/store';
import { MortgageCalculation } from './calculation.reducer';

export const retrievedMortgageCalculation = createAction(
  '[Mortgage Calculation Page] Retrieved Mortgage Calculation',
  props<{ calculation: MortgageCalculation }>()
);
