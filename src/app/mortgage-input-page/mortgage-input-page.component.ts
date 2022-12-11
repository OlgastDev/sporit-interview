import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'si-mortgage-input-page',
  templateUrl: './mortgage-input-page.component.html',
  styleUrls: ['./mortgage-input-page.component.scss'],
})
export class MortgageInputPageComponent {
  mortgageForm = this.formBuilder.group({
    loanType: 'Mortgage',
    amount: '',
    productType: 'MORTGAGE',
    interestRate: '',
    loanPercentage: '',
    years: '',
    fixation: '',
    repayment: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log('Mortgage:', this.mortgageForm.value);
  }
}
