import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageInputContainerComponent } from './mortgage-input-container.component';

describe('MortgageInputContainerComponent', () => {
  let component: MortgageInputContainerComponent;
  let fixture: ComponentFixture<MortgageInputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageInputContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
