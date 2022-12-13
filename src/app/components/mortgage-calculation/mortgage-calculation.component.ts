import { Component, Input } from '@angular/core';
import { UserTip } from '../../store/user-input.reducer';
import { MortgageCalculation } from '../../store/calculation.reducer';

const calcDiff = (first: number, second: number) =>
  Math.round(Math.abs(first - second) * 100) / 100;
@Component({
  selector: 'si-mortgage-calculation',
  templateUrl: './mortgage-calculation.component.html',
  styleUrls: ['./mortgage-calculation.component.scss'],
})
export class MortgageCalculationComponent {
  @Input() calculation: MortgageCalculation | null = null;
  @Input() userTip: UserTip | null = null;

  interestRateSuccess(): number | null {
    if (this.calculation && this.userTip) {
      return calcDiff(
        this.calculation?.interestRate,
        this.userTip?.interestRate
      );
    }
    return null;
  }

  repaymentSuccess(): number | null {
    if (this.calculation && this.userTip) {
      return calcDiff(this.calculation?.repayment, this.userTip?.repayment);
    }
    return null;
  }
}
