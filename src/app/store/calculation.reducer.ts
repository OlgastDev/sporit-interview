import { createReducer, on } from '@ngrx/store';
import { retrievedMortgageCalculation } from './calculation.actions';

export interface MortgageCalculation {
  loanType: string;
  amount: number;
  productType: string;
  interestRate: number;
  loanPercentage: number;
  years: number;
  fixation: number;
  repayment: number;
}

export interface MortgageCalculationState {
  isLoading: boolean;
  error: string | null;
  calculation: MortgageCalculation;
}

export const initialState: MortgageCalculationState = {
  isLoading: false,
  error: null,
  calculation: {} as MortgageCalculation,
};

export const calculationReducer = createReducer(
  initialState,
  on(retrievedMortgageCalculation, (_state, { calculation }) => ({
    ..._state,
    calculation,
  }))
);
