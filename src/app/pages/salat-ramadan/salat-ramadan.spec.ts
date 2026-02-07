import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SalatRamadanComponent } from './salat-ramadan';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('SalatRamadanComponent', () => {
  let component: SalatRamadanComponent;
  let fixture: ComponentFixture<SalatRamadanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalatRamadanComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SalatRamadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب إنشاء مكون سلة رمضان بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب تحديث المبلغ عند اختيار قفة كاملة أو نصف قفة', () => {
    component.setAmount('full', 450);
    expect(component.donationAmount).toBe(450);
    component.setAmount('half', 250);
    expect(component.donationAmount).toBe(250);
  });

  it('يجب إظهار خطأ إذا كان المبلغ أقل من 20 درهم', () => {
    component.donationAmount = 15;
    const result = (component as any).validateDonation();
    expect(result).toBeFalse();
    expect(component.toastActive).toBeTrue();
  });

  it('يجب الانتقال للخطوة الثانية عند تأكيد مبلغ صالح', () => {
    component.donationAmount = 450;
    component.confirmDonation();
    expect(component.showStep2).toBeTrue();
  });

  it('يجب تصفير البيانات بعد النجاح في الإرسال النهائي', fakeAsync(() => {
    component.donorName = 'متبرع كريم';
    component.donorPhone = '+212600000000';
    component.donorEmail = 'test@ramadan.com';
    component.showStep2 = true;

    component.finalSubmit();
    tick(2000);

    expect(component.showStep2).toBeFalse();
    expect(component.donorName).toBe('');
  }));
});
