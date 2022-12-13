import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
export class MortgageInputFormComponent implements OnChanges {
  @Input() userInputs: UserTip | null = null;
  @Output() submitForm = new EventEmitter<void>();

  mortgageForm = this.formBuilder.group({
    interestRate: [null, { validators: [Validators.required] }],
    repayment: [null, { validators: [Validators.required] }],
  });

  event$ = this.mortgageForm.valueChanges.subscribe((formData: any) => {
    console.log(formData);
    this.store.dispatch(updateUserInput({ userInputs: formData }));
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.mortgageForm.patchValue({
      interestRate: changes['userInputs'].currentValue.interestRate,
      repayment: changes['userInputs'].currentValue.repayment,
    });
  }

  handleSubmit(): void {
    if (this.mortgageForm.valid) {
      this.submitForm.emit();
    }
  }
}
