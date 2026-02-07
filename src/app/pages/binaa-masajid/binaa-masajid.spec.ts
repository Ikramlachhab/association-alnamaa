import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BinaaMasajidComponent } from './binaa-masajid';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('BinaaMasajidComponent', () => {
  let component: BinaaMasajidComponent;
  let fixture: ComponentFixture<BinaaMasajidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaaMasajidComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BinaaMasajidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب أن يتم إنشاء مكون بناء المساجد بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب أن يغير المبلغ عند اختيار أسهم البناء', () => {
    component.setAmount('foundation', 1000);
    expect(component.donationAmount).toBe(1000);
    component.setAmount('roof', 500);
    expect(component.donationAmount).toBe(500);
  });

  it('يجب ألا ينتقل للخطوة الثانية إذا كان المبلغ أقل من 20 درهم', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.showStep2).toBeFalse();
  });
});