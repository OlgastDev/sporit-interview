import { createSelector } from '@ngrx/store';
import { MortgageCalculationState } from './calculation.reducer';
import { MortgageRangesState } from './mortgage-ranges.reducer';

export interface AppState {
  mortgageRanges: MortgageRangesState;
  mortgageCalculation: MortgageCalculationState;
  userInput: any;
}

export const selectMortgageRangesState = (state: AppState) =>
  state.mortgageRanges;
export const selectCalculationState = (state: AppState) =>
  state.mortgageCalculation;

export const MortgageRangesSelector = createSelector(
  selectMortgageRangesState,
  (mortgageRanges: MortgageRangesState) => mortgageRanges.ranges
);

export const MortgageCalculationSelector = createSelector(
  selectCalculationState,
  (mortgageRanges: MortgageCalculationState) => mortgageRanges.calculation
);
