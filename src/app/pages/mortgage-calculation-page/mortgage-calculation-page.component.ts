import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MortgageCalculation } from '../../store/calculation.reducer';
import { AppState, MortgageCalculationSelector } from '../../store/selectors';

@Component({
  selector: 'si-mortgage-calculation-page',
  templateUrl: './mortgage-calculation-page.component.html',
  styleUrls: ['./mortgage-calculation-page.component.scss'],
})
export class MortgageCalculationPageComponent {
  mortgageCalculation$: Observable<MortgageCalculation>;

  constructor(private store: Store<AppState>) {
    this.mortgageCalculation$ = this.store.pipe(
      select(MortgageCalculationSelector)
    );
  }
}
