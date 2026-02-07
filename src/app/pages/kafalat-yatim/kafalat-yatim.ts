import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kafalat-yatim',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kafalat-yatim.html',
  styleUrl: './kafalat-yatim.css'
})
export class KafalatYatimComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false; 
  donationAmount = 300; 
  selectedOption = 'month'; 
  activeCard = 0;
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

  private triggerToast(msg: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = msg;
    this.toastType = type;
    this.toastActive = true;
    setTimeout(() => this.toastActive = false, 4000);
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private isValidPhone(phone: string): boolean {
    return /^(\+?\d{1,4})?[\s.-]?\d{7,15}$/.test(phone.replace(/\s/g, ''));
  }

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.triggerToast('تم نسخ رقم الحساب (RIB) بنجاح', 'success');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'active');
        }
      });
    }, { threshold: 0.15 });

    const revealElements = this.el.nativeElement.querySelectorAll('.reveal');
    revealElements.forEach((el: HTMLElement) => observer.observe(el));
  }

  toggleModal() { 
    this.showModal = !this.showModal; 
    this.showStep2 = false;
    this.addedToCartMsg = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  confirmDonation() { 
    if (this.donationAmount < 20) {
      this.triggerToast('المبلغ الأدنى للتبرع هو 20 درهم', 'error');
      return;
    }
    this.showModal = false;
    this.showStep2 = true;
  }

  addToCart() { 
    if (this.donationAmount >= 20) {
      this.addedToCartMsg = true;
      setTimeout(() => {
        this.addedToCartMsg = false;
        this.showModal = false;
        this.showStep2 = true; 
      }, 1500);
    } else {
      this.triggerToast('المبلغ الأدنى للتبرع هو 20 درهم', 'error');
    }
  }

  finalSubmit() {
    // 1. التحقق من ملء جميع الحقول أولاً
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.formError = true;
      this.triggerToast('يرجى ملء جميع البيانات المطلوبة', 'error');
      return;
    }

    // 2. فحص صحة البريد الإلكتروني بشكل منفصل
    if (!this.isValidEmail(this.donorEmail)) {
      this.triggerToast('يرجى إدخال بريد إلكتروني صحيح (مثال: example@mail.com)', 'error');
      return;
    }

    // 3. فحص صحة رقم الهاتف بشكل منفصل
    if (!this.isValidPhone(this.donorPhone)) {
      this.triggerToast('يرجى إدخال رقم هاتف صحيح (مثلاً: +212600000000)', 'error');
      return;
    }

    // في حال نجاح جميع الفحوصات
    this.formError = false;
    this.triggerToast(`جزاك الله خيرا للتاكيد قم بارسال تبرعك بمبلغ${this.donationAmount} درهم في الريب وسيتم ارسال فيديو التوثيق لهاتفك`, 'success');
    
    // تصفير البيانات وإغلاق المودال بعد فترة قصيرة
    setTimeout(() => {
        this.showStep2 = false;
        this.donorName = '';
        this.donorPhone = '';
        this.donorEmail = '';
        this.donationAmount = 300; // إعادة المبلغ للقيمة الافتراضية
    }, 2500);
  }
}