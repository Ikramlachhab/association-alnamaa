import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { KafalatYatimComponent } from './kafalat-yatim.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('KafalatYatimComponent', () => {
  let component: KafalatYatimComponent;
  let fixture: ComponentFixture<KafalatYatimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafalatYatimComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(KafalatYatimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب إنشاء مكون كفالة اليتيم بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب فتح المودال عند التبديل', () => {
    component.toggleModal();
    expect(component.showModal).toBeTrue();
  });

  it('يجب تحديث المبلغ عند اختيار باقة (مثلاً سنة)', () => {
    component.setAmount('year', 3600);
    expect(component.donationAmount).toBe(3600);
  });

  it('يجب إظهار خطأ إذا كان المبلغ أقل من 20 درهم عند التأكيد', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.showStep2).toBeFalse();
  });

  it('يجب الانتقال للمرحلة الثانية عند إدخال بيانات صحيحة', () => {
    component.donationAmount = 300;
    component.confirmDonation();
    expect(component.showStep2).toBeTrue();
  });

  it('يجب إظهار تنبيه نجاح عند الإرسال النهائي وتصفير الحقول', fakeAsync(() => {
    component.donorName = 'فاعل خير';
    component.donorPhone = '0612345678';
    component.donorEmail = 'test@mail.com';
    component.donationAmount = 300;
    
    component.finalSubmit();
    expect(component.formError).toBeFalse();
    
    tick(2500);
    expect(component.showStep2).toBeFalse();
    expect(component.donorName).toBe('');
  }));

  it('يجب نسخ الـ RIB بنجاح', () => {
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    component.copyRIB();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(component.bankAccount);
  });
});
