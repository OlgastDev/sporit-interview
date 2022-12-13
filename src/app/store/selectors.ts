import { createSelector } from '@ngrx/store';
import { MortgageCalculationState } from './calculation.reducer';
import { MortgageRangesState } from './mortgage-ranges.reducer';
import { UserInputState } from './user-input.reducer';

export interface AppState {
  mortgageRanges: MortgageRangesState;
  mortgageCalculation: MortgageCalculationState;
  userInput: UserInputState;
}

export const selectMortgageRangesState = (state: AppState) =>
  state.mortgageRanges;
export const selectCalculationState = (state: AppState) =>
  state.mortgageCalculation;
export const userInputsState = (state: AppState) => state.userInput;

export const MortgageRangesSelector = createSelector(
  selectMortgageRangesState,
  (mortgageRanges: MortgageRangesState) => mortgageRanges.ranges
);

export const MortgageRangesIsLoadingSelector = createSelector(
  selectMortgageRangesState,
  (mortgageRanges: MortgageRangesState) => mortgageRanges.isLoading
);

export const MortgageCalculationSelector = createSelector(
  selectCalculationState,
  (mortgageRanges: MortgageCalculationState) => mortgageRanges.calculation
);

export const UserInputsSelector = createSelector(
  userInputsState,
  (userInputs: UserInputState) => userInputs.userInputs
);

export const GeneratedMortgageSelector = createSelector(
  userInputsState,
  (userInputs: UserInputState) => userInputs.generatedMortgage
);
