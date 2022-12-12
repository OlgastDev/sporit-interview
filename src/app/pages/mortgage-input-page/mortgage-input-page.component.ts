import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MortgageInputRanges } from '../../store/mortgage-ranges.reducer';
import { MortgageService } from '../../services/mortgage.service';
import { retrievedMortgageRanges } from '../../store/mortgage-ranges.actions';
import { AppState, MortgageRangesSelector } from '../../store/selectors';

@Component({
  selector: 'si-mortgage-input-page',
  templateUrl: './mortgage-input-page.component.html',
  styleUrls: ['./mortgage-input-page.component.scss'],
})
export class MortgageInputPageComponent implements OnInit {
  mortgageInputRanges$: Observable<MortgageInputRanges>;

  constructor(
    private mortgageService: MortgageService,
    private store: Store<AppState>
  ) {
    this.mortgageInputRanges$ = this.store.pipe(select(MortgageRangesSelector));
  }

  ngOnInit(): void {
    this.mortgageService.getMortgageInputData().subscribe((resp) => {
      if (resp) {
        this.store.dispatch(retrievedMortgageRanges({ mortgageRanges: resp }));
      }
    });
  }
}
