import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageInputFormComponent } from './mortgage-input-form.component';

describe('MortgageInputFormComponent', () => {
  let component: MortgageInputFormComponent;
  let fixture: ComponentFixture<MortgageInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageInputFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
