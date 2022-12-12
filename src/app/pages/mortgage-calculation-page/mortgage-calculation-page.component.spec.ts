import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculationPageComponent } from './mortgage-calculation-page.component';

describe('MortgageCalculationPageComponent', () => {
  let component: MortgageCalculationPageComponent;
  let fixture: ComponentFixture<MortgageCalculationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
