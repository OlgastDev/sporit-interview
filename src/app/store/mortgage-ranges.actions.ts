import { createAction, props } from '@ngrx/store';
import { MortgageInputRanges } from './mortgage-ranges.reducer';

export const retrievedMortgageRanges = createAction(
  '[Mortgage input Page] Retrieved Mortgage Ranges',
  props<{ mortgageRanges: MortgageInputRanges }>()
);
