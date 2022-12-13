import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MortgageInputRanges } from '../../store/mortgage-ranges.reducer';
import { MortgageService } from '../../services/mortgage.service';
import { retrieveMortgageRangesSuccess } from '../../store/mortgage-ranges.actions';
import {
  AppState,
  GeneratedMortgageSelector,
  MortgageRangesSelector,
  UserInputsSelector,
} from '../../store/selectors';
import { GenerateMortgage, UserTip } from '../../store/user-input.reducer';

@Component({
  selector: 'si-mortgage-input-page',
  templateUrl: './mortgage-input-page.component.html',
  styleUrls: ['./mortgage-input-page.component.scss'],
})
export class MortgageInputPageComponent implements OnInit {
  mortgageInputRanges$: Observable<MortgageInputRanges>;
  userInputs$: Observable<UserTip | null>;
  generatedMortgage$: Observable<GenerateMortgage | null>;

  constructor(
    private mortgageService: MortgageService,
    private store: Store<AppState>
  ) {
    this.mortgageInputRanges$ = this.store.pipe(select(MortgageRangesSelector));
    this.userInputs$ = this.store.pipe(select(UserInputsSelector));
    this.generatedMortgage$ = this.store.pipe(
      select(GeneratedMortgageSelector)
    );
  }

  ngOnInit(): void {
    this.mortgageService.getMortgageInputData().subscribe((resp) => {
      if (resp) {
        this.store.dispatch(
          retrieveMortgageRangesSuccess({ mortgageRanges: resp })
        );
      }
    });
  }
}
