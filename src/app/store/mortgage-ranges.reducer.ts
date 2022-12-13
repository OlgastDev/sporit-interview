import { createReducer, on } from '@ngrx/store';
import {
  retrieveMortgageRanges,
  retrieveMortgageRangesError,
  retrieveMortgageRangesSuccess,
} from './mortgage-ranges.actions';

export interface MortgageInputRanges {
  loanType: string;
  name: string;
  amount: {
    min: number;
    max: number;
  };
  years: {
    min: number;
    max: number;
  };
  fixation: {
    values: number[];
    defaultValue: number;
  };
  loanPercentage: {
    min: number;
    max: number;
    defaultValue: number;
  };
}

export interface MortgageRangesState {
  isLoading: boolean;
  error: string | null;
  ranges: MortgageInputRanges;
}

export const initialState: MortgageRangesState = {
  isLoading: false,
  error: null,
  ranges: {} as MortgageInputRanges,
};

export const mortgageRangesReducer = createReducer(
  initialState,
  on(retrieveMortgageRanges, (_state) => ({
    ..._state,
    isLoading: true,
  })),
  on(retrieveMortgageRangesSuccess, (_state, { mortgageRanges }) => ({
    ..._state,
    ranges: mortgageRanges,
    isLoading: false,
  })),
  on(retrieveMortgageRangesError, (_state, { error }) => ({
    ..._state,
    error: error,
    isLoading: false,
  }))
);
