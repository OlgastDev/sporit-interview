import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export interface MortgageInputData {
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

export interface MortgageCalculationRequestBody {
  loanType: string;
  amount: number;
  years: number;
  loanPercentage: number;
  fixation: number;
}

export interface MortgageCalculationResponse {
  loanType: string;
  amount: number;
  productType: string;
  interestRate: number;
  loanPercentage: number;
  years: number;
  fixation: number;
  repayment: number;
}

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  constructor(private http: HttpClient) {}

  private mortgageApiUrl =
    'https://private-anon-991c9360bd-eahcalculatorsv2prod.apiary-mock.com/webapi/api/v2/hypocalc/loans/mortgage';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMortgageInputData(): Observable<MortgageInputData | undefined> {
    return this.http
      .get<{ loans: MortgageInputData[] }>(this.mortgageApiUrl)
      .pipe(
        map((res) => res.loans.find((loan) => loan.loanType === 'Mortgage')),
        catchError(
          this.handleError<MortgageInputData>(
            'getMortgageInputData',
            {} as MortgageInputData
          )
        )
      );
  }

  getMortgageCalculation(
    mortgageInputs: MortgageCalculationRequestBody
  ): Observable<MortgageCalculationResponse | undefined> {
    return this.http
      .post<MortgageCalculationResponse>(this.mortgageApiUrl, mortgageInputs)
      .pipe(
        catchError(
          this.handleError<MortgageCalculationResponse>(
            'getMortgageInputData',
            {} as MortgageCalculationResponse
          )
        )
      );
  }
}
