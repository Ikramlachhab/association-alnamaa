import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adhiya',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adhiya.html',
  styleUrl: './adhiya.css'
})
export class AdhiyaComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false; 
  donationAmount = 2500; 
  selectedOption = 'khrouf'; 
  activeCard = 0;
  showToast = false;
  addedToCartMsg = false; 

  // متغيرات التنبيه (Toast)
  toastActive = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  // بيانات المتبرع
  donorName = ''; 
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 
  formError = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // دالة موحدة لإظهار التنبيهات
  private triggerToast(msg: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = msg;
    this.toastType = type;
    this.toastActive = true;
    setTimeout(() => this.toastActive = false, 4000);
  }

  private isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // دالة التحقق من الهاتف (تدعم التنسيق الدولي لأي بلد)
  private isValidPhone(phone: string): boolean {
    // يسمح بـ + في البداية، أو أرقام فقط. الطول بين 7 و 15 رقم.
    const re = /^(\+?\d{1,4})?[\s.-]?\d{7,15}$/; 
    return re.test(phone.replace(/\s/g, '')); // نزيل المسافات قبل الفحص
  }

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.triggerToast('تم نسخ رقم الحساب (RIB) بنجاح', 'success');
  }

  ngAfterViewInit() {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'active');
        }
      });
    }, observerOptions);

    const revealElements = this.el.nativeElement.querySelectorAll('.reveal');
    revealElements.forEach((el: HTMLElement) => observer.observe(el));
  }

  toggleModal() { 
    this.showModal = !this.showModal; 
    this.showToast = false; 
    this.showStep2 = false;
    this.addedToCartMsg = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  private validateDonation(): boolean {
    if (this.donationAmount < 20) {
      this.triggerToast('المبلغ الأدنى للتبرع هو 20 درهم', 'error');
      return false;
    }
    return true;
  }

  confirmDonation() { 
    if (this.validateDonation()) {
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  addToCart() { 
    if (this.validateDonation()) {
      this.addedToCartMsg = true;
      setTimeout(() => {
        this.addedToCartMsg = false;
        this.showModal = false;
        this.showStep2 = true; 
      }, 1500);
    }
  }

  finalSubmit() {
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.formError = true;
      this.triggerToast('يرجى ملء جميع البيانات المطلوبة', 'error');
      return;
    }
    if (!this.isValidEmail(this.donorEmail)) {
      this.triggerToast('يرجى إدخال بريد إلكتروني صحيح', 'error');
      return;
    }
    if (!this.isValidPhone(this.donorPhone)) {
      this.triggerToast('يرجى إدخال رقم هاتف صحيح مع رمز الدولة (مثلاً +212...)', 'error');
      return;
    }

    this.formError = false;
    this.triggerToast(`جزاك الله خيرا! للتاكيد قم بارسال تبرعك بمبلغ${this.donationAmount} درهم في الريب. وسيتم ارسال فيديو التوثيق لهاتفك`, 'success');
    
    // تصفير البيانات بعد النجاح
    setTimeout(() => {
        this.showStep2 = false;
        this.donorName = '';
        this.donorPhone = '';
        this.donorEmail = '';
        this.donationAmount = 2500;
    }, 2000);
  }
}