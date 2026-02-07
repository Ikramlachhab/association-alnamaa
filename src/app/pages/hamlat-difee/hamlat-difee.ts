import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hamlat-difee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hamlat-difee.html',
  styleUrl: './hamlat-difee.css'
})
export class HamlatDifeeComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false; 
  donationAmount = 250; 
  selectedOption = 'clothes'; 
  
  activeCard = 0;
  activeAxe = 0;

  toastActive = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  addedToCartMsg = false;

  donorName = ''; 
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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

  /**
   * دالة التحقق من الهاتف العالمي
   * تقبل البدء بـ + أو 00 متبوعاً بكود الدولة
   * وتتحقق من الطول المنطقي للأرقام (بين 7 و 15 رقم)
   */
  private isValidPhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\s/g, ''); // إزالة المسافات
    const re = /^(\+?\d{1,4})?[\s.-]?\d{7,15}$/;
    return re.test(cleanPhone);
  }

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.triggerToast('تم نسخ رقم الحساب (RIB) بنجاح');
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
    this.showStep2 = false;
    this.addedToCartMsg = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  private validateDonation(): boolean {
    if (this.donationAmount < 20) {
      this.triggerToast('المبلغ الأدنى للمساهمة هو 20 درهم', 'error');
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
      this.triggerToast('يرجى ملء كافة البيانات', 'error');
      return;
    }
    if (!this.isValidEmail(this.donorEmail)) {
      this.triggerToast('البريد الإلكتروني غير صحيح', 'error');
      return;
    }
    if (!this.isValidPhone(this.donorPhone)) {
      this.triggerToast('يرجى إدخال رقم هاتف منطقي (مثال: +212600000000)', 'error');
      return;
    }

    this.triggerToast(`جزاك الله خيرا! للتاكيد قم بارسال تبرعك بمبلغ${this.donationAmount} درهم في الريب وسيتم ارسال فيديو التوثيق لهاتفك`, 'success');
    
    setTimeout(() => {
      this.showStep2 = false;
      this.donorName = '';
      this.donorPhone = '';
      this.donorEmail = '';
      this.activeAxe = 0;
    }, 2000);
  }
}
