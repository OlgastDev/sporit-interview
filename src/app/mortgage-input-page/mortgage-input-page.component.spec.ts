import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageInputPageComponent } from './mortgage-input-page.component';

describe('MortgageInputPageComponent', () => {
  let component: MortgageInputPageComponent;
  let fixture: ComponentFixture<MortgageInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageInputPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
