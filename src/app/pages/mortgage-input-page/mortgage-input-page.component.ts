import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit(): void {
    console.log('Mortgage:', this.mortgageForm.value);
    this.router.navigate(['/calculation']);
  }
}
