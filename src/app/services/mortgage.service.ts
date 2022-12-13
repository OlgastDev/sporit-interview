import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { MortgageCalculation } from '../store/calculation.reducer';
import { MortgageInputRanges } from '../store/mortgage-ranges.reducer';

export interface MortgageCalculationRequestBody {
  loanType: string;
  amount: number;
  years: number;
  loanPercentage: number;
  fixation: number;
}

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'WEB-API-key': '257e7832-1632-4a0a-8bf1-879c3c8ff245',
  });
  constructor(private http: HttpClient) {}

  private mortgageApiUrl =
    'https://private-anon-991c9360bd-eahcalculatorsv2prod.apiary-mock.com/webapi/api/v2/hypocalc/loans/mortgage';
  // 'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/hypocalc';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMortgageInputData(): Observable<MortgageInputRanges | undefined> {
    return this.http
      .get<{ loans: MortgageInputRanges[] }>(this.mortgageApiUrl, {
        headers: this.headers,
      })
      .pipe(
        map((res) => res.loans.find((loan) => loan.loanType === 'Mortgage')),
        catchError(
          this.handleError<MortgageInputRanges>(
            'getMortgageInputData',
            {} as MortgageInputRanges
          )
        )
      );
  }

  getMortgageCalculation(
    mortgageInputs: MortgageCalculationRequestBody
  ): Observable<MortgageCalculation | undefined> {
    return this.http
      .post<MortgageCalculation>(
        this.mortgageApiUrl,
        JSON.stringify(mortgageInputs),
        { headers: this.headers }
      )
      .pipe(
        catchError(
          this.handleError<MortgageCalculation>(
            'getMortgageInputData',
            {} as MortgageCalculation
          )
        )
      );
  }
}
