import { Component, Input, OnInit } from '@angular/core';
import { MortgageInputRanges } from '../../store/mortgage-ranges.reducer';
import { GenerateMortgage } from '../../store/user-input.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/selectors';
import { storeGeneratedMortgage } from '../../store/user-input.actions';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@Component({
  selector: 'si-generated-mortgage',
  templateUrl: './generated-mortgage.component.html',
  styleUrls: ['./generated-mortgage.component.scss'],
})
export class GeneratedMortgageComponent implements OnInit {
  @Input() ranges: MortgageInputRanges | null = null;
  @Input() generatedMortgage: GenerateMortgage | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    if (!this.generatedMortgage && this.ranges) {
      const generate = {
        amount: getRandomInt(
          this.ranges?.amount?.min,
          this.ranges?.amount?.max
        ),
        loanPercentage: getRandomInt(
          this.ranges?.loanPercentage?.min,
          this.ranges?.loanPercentage?.max
        ),
        fixation:
          this.ranges?.fixation?.values[
            getRandomInt(1, this.ranges?.fixation?.values.length) - 1
          ],
        years: getRandomInt(this.ranges?.years?.min, this.ranges?.years?.max),
      };
      this.store.dispatch(
        storeGeneratedMortgage({ generatedMortgage: generate })
      );
    }
  }
}
