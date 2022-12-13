import { createAction, props } from '@ngrx/store';
import { MortgageInputRanges } from './mortgage-ranges.reducer';

export const retrieveMortgageRanges = createAction(
  '[Mortgage input Page] Retrieve Mortgage Ranges'
);

export const retrieveMortgageRangesSuccess = createAction(
  '[Mortgage input Page] Retrieve Mortgage Ranges Success',
  props<{ mortgageRanges: MortgageInputRanges }>()
);

export const retrieveMortgageRangesError = createAction(
  '[Mortgage input Page] Retrieve Mortgage Ranges Error',
  props<{ error: string }>()
);
