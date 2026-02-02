import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HamlatDifeeComponent } from './hamlat-difee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('HamlatDifeeComponent', () => {
  let component: HamlatDifeeComponent;
  let fixture: ComponentFixture<HamlatDifeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamlatDifeeComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HamlatDifeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب أن يفتح المودال ويضبط الخيارات الافتراضية للدفء', () => {
    component.toggleModal();
    expect(component.showModal).toBeTrue();
    expect(component.selectedOption).toBe('clothes');
  });

  it('يجب التحقق من شرط الـ 20 درهم قبل الانتقال للخطوة الثانية', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.showStep2).toBeFalse();
    
    component.donationAmount = 50;
    component.confirmDonation();
    expect(component.showStep2).toBeTrue();
  });

  it('يجب نسخ الـ RIB بنجاح', () => {
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    component.copyRIB();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(component.bankAccount);
  });
});
