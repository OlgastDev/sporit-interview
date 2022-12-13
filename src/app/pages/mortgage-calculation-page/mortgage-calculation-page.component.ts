import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MortgageCalculation } from '../../store/calculation.reducer';
import {
  AppState,
  MortgageCalculationSelector,
  UserInputsSelector,
} from '../../store/selectors';
import { UserTip } from '../../store/user-input.reducer';

@Component({
  selector: 'si-mortgage-calculation-page',
  templateUrl: './mortgage-calculation-page.component.html',
  styleUrls: ['./mortgage-calculation-page.component.scss'],
})
export class MortgageCalculationPageComponent {
  mortgageCalculation$: Observable<MortgageCalculation>;
  userTip$: Observable<UserTip | null>;

  constructor(private store: Store<AppState>) {
    this.mortgageCalculation$ = this.store.pipe(
      select(MortgageCalculationSelector)
    );
    this.userTip$ = this.store.pipe(select(UserInputsSelector));
  }
}
