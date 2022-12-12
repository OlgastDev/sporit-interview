import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/selectors';
import { MortgageService } from '../../services/mortgage.service';
import { MortgageInputRanges } from '../../store/mortgage-ranges.reducer';
import { retrievedMortgageCalculation } from '../../store/calculation.actions';

@Component({
  selector: 'si-mortgage-input-form',
  templateUrl: './mortgage-input-form.component.html',
  styleUrls: ['./mortgage-input-form.component.scss'],
})
export class MortgageInputFormComponent {
  @Input() ranges: MortgageInputRanges | null = {
    loanType: 'Mortgage',
    name: 'MORTGAGE',
    amount: {
      min: 0,
      max: 0,
    },
    years: {
      min: 0,
      max: 0,
    },
    fixation: {
      values: [],
      defaultValue: 0,
    },
    loanPercentage: {
      min: 0,
      max: 0,
      defaultValue: 0,
    },
  };

  mortgageForm = this.formBuilder.group({
    loanType: 'Mortgage',
    amount: ['', { nonNullable: true, validators: [Validators.required] }],
    productType: 'MORTGAGE',
    interestRate: [
      '',
      { nonNullable: true, validators: [Validators.required] },
    ],
    loanPercentage: [
      '',
      { nonNullable: true, validators: [Validators.required] },
    ],
    years: ['', { nonNullable: true, validators: [Validators.required] }],
    fixation: ['', { nonNullable: true, validators: [Validators.required] }],
    repayment: ['', { nonNullable: true, validators: [Validators.required] }],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mortgageService: MortgageService,
    private store: Store<AppState>
  ) {}

  handleSubmit(): void {
    console.log('Mortgage:', this.mortgageForm.value);
    const reqBody = {
      loanType: this.mortgageForm.value.loanType || 'Mortgage',
      productType: this.mortgageForm.value.productType || 'MORTGAGE',
      // TODO: Add correct validations
      amount: parseInt(this.mortgageForm.value.amount || '1000000'),
      loanPercentage: parseInt(this.mortgageForm.value.loanPercentage || '80'),
      years: parseInt(this.mortgageForm.value.years || '20'),
      fixation: parseInt(this.mortgageForm.value.fixation || '2'),
    };
    if (reqBody) {
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
}
