import { createReducer, on } from '@ngrx/store';
import { storeGeneratedMortgage, updateUserInput } from './user-input.actions';

export interface UserTip {
  interestRate: number;
  repayment: number;
}

export interface GenerateMortgage {
  amount: number;
  loanPercentage: number;
  years: number;
  fixation: number;
}

export interface UserInputState {
  userInputs: UserTip | null;
  generatedMortgage: GenerateMortgage | null;
}

export const initialState: UserInputState = {
  userInputs: null,
  generatedMortgage: {
    amount: 7000000,
    loanPercentage: 70,
    years: 25,
    fixation: 5,
  },
};

export const userInputReducer = createReducer(
  initialState,
  on(updateUserInput, (_state, { userInputs }) => ({
    ..._state,
    userInputs,
  })),
  on(storeGeneratedMortgage, (_state, { generatedMortgage }) => ({
    ..._state,
    generatedMortgage,
  }))
);
