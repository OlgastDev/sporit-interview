import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedMortgageComponent } from './generated-mortgage.component';

describe('GeneratedMortgageComponent', () => {
  let component: GeneratedMortgageComponent;
  let fixture: ComponentFixture<GeneratedMortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratedMortgageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratedMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
