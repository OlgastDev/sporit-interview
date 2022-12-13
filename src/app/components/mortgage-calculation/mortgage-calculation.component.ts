import { Component, Input } from '@angular/core';
import { UserTip } from '../../store/user-input.reducer';
import { MortgageCalculation } from '../../store/calculation.reducer';

@Component({
  selector: 'si-mortgage-calculation',
  templateUrl: './mortgage-calculation.component.html',
  styleUrls: ['./mortgage-calculation.component.scss'],
})
export class MortgageCalculationComponent {
  @Input() calculation: MortgageCalculation | null = null;
  @Input() userTip: UserTip | null = null;
}
