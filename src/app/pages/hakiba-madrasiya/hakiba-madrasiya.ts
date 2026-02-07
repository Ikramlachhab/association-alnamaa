import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hakiba-madrasiya',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hakiba-madrasiya.html',
  styleUrl: './hakiba-madrasiya.css'
})
export class HakibaMadrasiyaComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false; 
  donationAmount = 250;
  selectedOption = 'full';
  activeCard = 0;

  donorName = '';
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 
  
  // نظام الرسائل الخارجية (Toasts)
  toastActive = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private isValidPhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\s/g, ''); 
    const phoneRegex = /^(\+|00)[1-9][0-9]{6,14}$|^[0-9]{8,15}$/;
    return phoneRegex.test(cleanPhone);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) this.renderer.addClass(entry.target, 'active');
      });
    }, { threshold: 0.15 });

    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: HTMLElement) => observer.observe(el));
  }

  toggleModal() { 
    this.showModal = !this.showModal; 
    this.showStep2 = false; 
  }

  private triggerToast(msg: string, type: 'success' | 'error') {
    this.toastMessage = msg;
    this.toastType = type;
    this.toastActive = true;
    setTimeout(() => this.toastActive = false, 5000);
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  confirmDonation() { 
    if (this.donationAmount < 20) {
      this.triggerToast('الحد الأدنى للتبرع هو 20 درهم', 'error');
    } else {
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.triggerToast('تم نسخ رقم الحساب البنكي بنجاح', 'success');
  }

  finalSubmit() {
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.triggerToast('يرجى ملء جميع الخانات لنرسل لكم التقارير', 'error');
      return;
    }

    if (!this.isValidEmail(this.donorEmail)) {
      this.triggerToast('البريد الإلكتروني غير صحيح', 'error');
      return;
    }

    if (!this.isValidPhone(this.donorPhone)) {
      this.triggerToast('رقم الهاتف غير صحيح، يرجى إدخال رقم حقيقي', 'error');
      return;
    }

    this.triggerToast(`جزاك الله خيرا يا${this.donorName}! للتاكيد قم بارسال تبرعك في الريب`, 'success');
    
    setTimeout(() => {
      this.showStep2 = false;
      this.donorName = ''; 
      this.donorPhone = ''; 
      this.donorEmail = '';
    }, 2000);
  }

  addToCart() { 
    if (this.donationAmount >= 20) {
      this.triggerToast('تمت الإضافة للسلة بنجاح 🛒', 'success');
    } else {
      this.triggerToast('المبلغ غير كافٍ للإضافة للسلة', 'error');
    }
  }
}
