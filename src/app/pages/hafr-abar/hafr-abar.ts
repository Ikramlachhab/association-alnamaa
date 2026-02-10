import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hafr-abar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hafr-abar.html',
  styleUrl: './hafr-abar.css'
})
export class HafrAbarComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false;
  donationAmount = 500;
  selectedOption = 'share';
  activeCard = 0;

  // Donor Data
  donorName = ''; 
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 
  
  // Toast System Logic
  toastActive = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage = '';
  copyButtonText = 'نسخ الحساب الآن';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  public isValidPhone(phone: string): boolean {
    if(!phone) return false;
    const cleanPhone = phone.replace(/\s/g, ''); 
    const phoneRegex = /^(\+?\d{1,4})?[\s.-]?\d{7,15}$/;
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

  private triggerToast(msg: string, type: 'success' | 'error') {
    this.toastMessage = msg;
    this.toastType = type;
    this.toastActive = true;
    setTimeout(() => this.toastActive = false, 4000);
  }

  toggleModal() { 
    this.showModal = !this.showModal; 
    this.showStep2 = false; 
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt;
  }

  confirmDonation() { 
    if (this.donationAmount < 50) {
      this.triggerToast('المبلغ الأدنى للمساهمة هو 50 درهم', 'error');
    } else {
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.copyButtonText = 'تم النسخ بنجاح ✅';
    this.triggerToast('تم نسخ رقم الحساب البنكي بنجاح', 'success');
    setTimeout(() => { this.copyButtonText = 'نسخ الحساب الآن'; }, 2000);
  }
  getOptionLabel(opt: string): string {
    const labels: any = {
      'share': 'سهم في بئر ارتوازي',
      'surface': 'بئر سطحي كامل',
      'deep': 'بئر ارتوازي عميق',
      'full': 'مشروع سلسبيلاً المتكامل'
    };
    return labels[opt] || 'مساهمة في سُقيا الماء';
  }

  finalSubmit() {
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.triggerToast('يرجى ملء جميع الخانات لنرسل لكم تقارير الحفر', 'error');
      return;
    }

    if (!this.isValidEmail(this.donorEmail)) {
      this.triggerToast('البريد الإلكتروني غير صحيح', 'error');
      return;
    }

    if (!this.isValidPhone(this.donorPhone)) {
      this.triggerToast('رقم الهاتف غير صحيح، يرجى التأكد من الرمز الدولي', 'error');
      return;
    }

    const phoneNumber = '212642732997'; // رقم الجمعية للواتساب
    const selectedLabel = this.getOptionLabel(this.selectedOption);

    const message = `السلام عليكم ورحمة الله،
أريد تأكيد مساهمتي في مشروع: *سُقيا الماء (الآبار)* 💧

*بيانات المتبرع:*
- الاسم (للوحة الرخامية): ${this.donorName}
- الهاتف: ${this.donorPhone}
- البريد: ${this.donorEmail}

*تفاصيل المساهمة:*
- نوع السُقيا: ${selectedLabel}
- المبلغ المرصود: ${this.donationAmount} درهم

سأرسل لكم وصل التحويل البنكي فوراً. جزاكم الله خيراً.`;

    this.triggerToast(`جزاك الله خيراً يا ${this.donorName}، سيتم توجيهك للواتساب الآن.`, 'success');

    setTimeout(() => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      this.showStep2 = false;
      this.donorName = ''; 
      this.donorPhone = ''; 
      this.donorEmail = '';
    }, 2000);
  }

  addToCart() { 
    if (this.donationAmount >= 50) {
      this.triggerToast('تمت إضافة المساهمة للسلة 🛒', 'success');
    } else {
      this.triggerToast('المبلغ الأدنى للمساهمة هو 50 درهم', 'error');
    }
  }
}
