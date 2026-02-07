import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AdhiyaComponent } from './adhiya';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AdhiyaComponent', () => {
  let component: AdhiyaComponent;
  let fixture: ComponentFixture<AdhiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // المكون standalone لذا نضعه في imports مع الوحدات الداعمة
      imports: [AdhiyaComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdhiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب أن يتم إنشاء مكون الأضحية بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب أن يفتح المودال عند استدعاء toggleModal', () => {
    expect(component.showModal).toBeFalse();
    component.toggleModal();
    expect(component.showModal).toBeTrue();
  });

  it('يجب أن يغير مبلغ التبرع عند اختيار باقة أضحية مختلفة', () => {
    // اختبار باقة الإحسان الأصلية
    component.setAmount('amal', 2800);
    expect(component.selectedOption).toBe('amal');
    expect(component.donationAmount).toBe(2800);
  });

  // --- الاختبارات الجديدة المضافة ---
  it('يجب ألا ينتقل للخطوة الثانية إذا كان مبلغ الأضحية أقل من 20 درهم', () => {
    component.donationAmount = 15;
    component.confirmDonation();
    expect(component.showStep2).toBeFalse();
  });

  it('يجب أن يغير المبلغ عند اختيار خروف أو ماعز أو بقر', () => {
    // اختبار الخروف
    component.setAmount('khrouf', 2500);
    expect(component.donationAmount).toBe(2500);
    
    // اختبار الماعز
    component.setAmount('maez', 1800);
    expect(component.donationAmount).toBe(1800);

    // اختبار البقر
    component.setAmount('baqar', 15000);
    expect(component.donationAmount).toBe(15000);
  });
  // ---------------------------------

  it('يجب أن ينتقل لخطوة بيانات المتبرع عند تأكيد مبلغ صالح', () => {
    component.donationAmount = 2800;
    component.confirmDonation();
    expect(component.showModal).toBeFalse();
    expect(component.showStep2).toBeTrue();
  });

  it('يجب أن يظهر خطأ (formError) إذا كانت بيانات المتبرع ناقصة', () => {
    component.showStep2 = true;
    component.donorName = ''; // حقل فارغ
    component.donorPhone = '';
    component.finalSubmit();
    expect(component.formError).toBeTrue();
    expect(component.showStep2).toBeTrue();
  });

  it('يجب إتمام العملية وتصفير البيانات بعد النجاح في الإرسال النهائي', () => {
    // إعداد بيانات تجريبية صحيحة
    component.donorName = 'ياسين الخير';
    component.donorPhone = '0600112233';
    component.donorEmail = 'yassine@example.com';
    component.showStep2 = true;

    // مراقبة الـ alert لمنع ظهوره أثناء الاختبار
    spyOn(window, 'alert');

    component.finalSubmit();

    expect(component.formError).toBeFalse();
    expect(component.showStep2).toBeFalse();
    expect(component.donorName).toBe(''); // تم تصفيره
    expect(window.alert).toHaveBeenCalledWith(jasmine.stringMatching(/جزاك الله خيراً/));
  });

  it('يجب إظهار التوست (Toast) لمدة 5 ثوانٍ عند إدخال مبلغ غير كافٍ', fakeAsync(() => {
    component.donationAmount = 10;
    // الوصول للدالة الخاصة عن طريق Cast لغرض الاختبار
    (component as any).validateDonation();
    
    expect(component.showToast).toBeTrue();
    
    // محاكاة مرور 5 ثوانٍ
    tick(5000);
    expect(component.showToast).toBeFalse();
  }));

  it('يجب نسخ رقم الحساب (RIB) عند استدعاء copyRIB', () => {
    spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    spyOn(window, 'alert');
    
    component.copyRIB();
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(component.bankAccount);
    expect(window.alert).toHaveBeenCalledWith('تم نسخ رقم الحساب (RIB) بنجاح');
  });

  it('يجب تحديث رسالة السلة والمتابعة تلقائياً عند إضافة الأضحية', fakeAsync(() => {
    component.donationAmount = 2500;
    component.addToCart();
    
    expect(component.addedToCartMsg).toBeTrue();
    
    tick(1500); // محاكاة وقت رسالة النجاح
    
    expect(component.addedToCartMsg).toBeFalse();
    expect(component.showModal).toBeFalse();
    expect(component.showStep2).toBeTrue();
  }));
});