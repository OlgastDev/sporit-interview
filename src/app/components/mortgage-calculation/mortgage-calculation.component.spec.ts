import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculationComponent } from './mortgage-calculation.component';

describe('MortgageCalculationComponent', () => {
  let component: MortgageCalculationComponent;
  let fixture: ComponentFixture<MortgageCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
