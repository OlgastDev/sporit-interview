import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { retrievedMortgageCalculation } from '../../store/calculation.actions';
import { MortgageService } from '../../services/mortgage.service';
import { MortgageInputRanges } from '../../store/mortgage-ranges.reducer';
import { AppState } from '../../store/selectors';
import { GenerateMortgage, UserTip } from '../../store/user-input.reducer';

@Component({
  selector: 'si-mortgage-input-container',
  templateUrl: './mortgage-input-container.component.html',
  styleUrls: ['./mortgage-input-container.component.scss'],
})
export class MortgageInputContainerComponent {
  @Input() ranges: MortgageInputRanges | null = null;
  @Input() generatedMortgage: GenerateMortgage | null = null;
  @Input() userInputs: UserTip | null = null;

  constructor(
    private router: Router,
    private mortgageService: MortgageService,
    private store: Store<AppState>
  ) {}

  handleSubmit(): void {
    const reqBody = {
      loanType: 'Mortgage',
      amount: this.generatedMortgage?.amount || 0,
      productType: 'MORTGAGE',
      loanPercentage: this.generatedMortgage?.loanPercentage || 0,
      years: this.generatedMortgage?.years || 0,
      fixation: this.generatedMortgage?.fixation || 0,
    };
    this.mortgageService.getMortgageCalculation(reqBody).subscribe((resp) => {
      if (resp) {
        this.store.dispatch(
          retrievedMortgageCalculation({ calculation: resp })
        );
      }
    });
    this.router.navigate(['/calculation']);
  }
}
