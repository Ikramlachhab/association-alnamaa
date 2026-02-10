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
  getOptionLabel(opt: string): string {
    const labels: any = {
      'full': 'حقيبة مدرسية متكاملة بجميع اللوازم',
      'share': 'مساهمة جزئية في حقيبة',
      'tools': 'طقم أدوات هندسية ودفاتر',
      'open': 'مساهمة مفتوحة لدعم التعليم'
    };
    return labels[opt] || 'مساهمة في الحقيبة المدرسية';
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

    const phoneNumber = '212642732997'; // رقم الواتساب
    const selectedLabel = this.getOptionLabel(this.selectedOption);

    const message = `السلام عليكم ورحمة الله،
أريد تأكيد مساهمتي في مشروع: *الحقيبة المدرسية* 🎒

*بيانات المتبرع:*
- الاسم: ${this.donorName}
- الهاتف: ${this.donorPhone}
- البريد: ${this.donorEmail}

*تفاصيل المساهمة:*
- نوع العطاء: ${selectedLabel}
- المبلغ المرصود: ${this.donationAmount} درهم

سأرسل لكم وصل التحويل البنكي حالاً لدعم تلاميذنا. جزاكم الله خيراً.`;

    this.triggerToast(`جزاك الله خيراً يا ${this.donorName}، سيتم توجيهك للواتساب الآن.`, 'success');

    setTimeout(() => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      this.showStep2 = false;
      this.donorName = ''; 
      this.donorPhone = ''; 
      this.donorEmail = '';
      this.donationAmount = 250;
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
