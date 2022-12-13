import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/selectors';
import { updateUserInput } from '../../store/user-input.actions';
import { UserTip } from '../../store/user-input.reducer';

@Component({
  selector: 'si-mortgage-input-form',
  templateUrl: './mortgage-input-form.component.html',
  styleUrls: ['./mortgage-input-form.component.scss'],
})
export class MortgageInputFormComponent {
  @Input() userInputs: UserTip | null = null;
  @Output() submitForm = new EventEmitter<void>();

  mortgageForm = this.formBuilder.group({
    interestRate: [
      this.userInputs?.interestRate || null,
      { validators: [Validators.required] },
    ],
    repayment: [
      this.userInputs?.repayment || null,
      { validators: [Validators.required] },
    ],
  });

  event$ = this.mortgageForm.valueChanges.subscribe((formData: any) => {
    this.store.dispatch(updateUserInput({ userInputs: formData }));
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  handleSubmit(): void {
    if (this.mortgageForm.valid) {
      this.submitForm.emit();
    }
  }
}
