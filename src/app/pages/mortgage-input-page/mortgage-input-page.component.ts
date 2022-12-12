import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MortgageService,
  MortgageInputData,
  MortgageCalculationRequestBody,
} from '../../services/mortgage.service';

@Component({
  selector: 'si-mortgage-input-page',
  templateUrl: './mortgage-input-page.component.html',
  styleUrls: ['./mortgage-input-page.component.scss'],
})
export class MortgageInputPageComponent implements OnInit {
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

  mortgageInputData: MortgageInputData | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mortgageService: MortgageService
  ) {}

  ngOnInit(): void {
    this.mortgageService
      .getMortgageInputData()
      .subscribe((resp) => (this.mortgageInputData = resp));
  }

  onSubmit(): void {
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
      this.mortgageService
        .getMortgageCalculation(reqBody)
        .subscribe((resp) => console.log('resp', resp));
      this.router.navigate(['/calculation']);
    }
  }
}
