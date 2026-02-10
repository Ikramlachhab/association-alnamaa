import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iftar-ramadan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iftar-ramadan.html',
  styleUrl: './iftar-ramadan.css'
})
export class IftarRamadanComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false; 
  donationAmount = 30; 
  selectedOption = 'meal'; 
  activeCard = 0;
  addedToCartMsg = false; 


  // نظام التنبيهات (Toast) المنسوخ من الأضحية
  toastActive = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  // بيانات المتبرع
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

  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    this.triggerToast('تم نسخ رقم الحساب بنجاح', 'success');
  }

  confirmDonation() { 
    if (this.donationAmount < 20) {
      this.triggerToast('المبلغ الأدنى للمساهمة هو 20 درهم', 'error');
      return;
    }
    this.showModal = false;
    this.showStep2 = true;
  }

  addToCart() { 
    if (this.donationAmount < 20) {
      this.triggerToast('المبلغ الأدنى هو 20 درهم', 'error');
      return;
    }
    this.addedToCartMsg = true;
    setTimeout(() => {
      this.addedToCartMsg = false;
      this.showModal = false;
      this.showStep2 = true; 
    }, 1500);
  }

  getOptionLabel(opt: string): string {
    const labels: any = {
      'baraka': 'تقديم الفطور',
      'family': 'تقديم السحور',
      'month': 'قفة المؤونة',
      'open': 'ضمان التنقل'
    };
    return labels[opt] || 'مساهمة عامة';
  }

  // 1. دالة لتحويل الكود لاسم مفهوم (ضعيها فوق finalSubmit)
  
  // 2. الدالة النهائية المعدلة (استبدلي القديمة بهذه)
  finalSubmit() {
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.triggerToast('يرجى ملء جميع البيانات المطلوبة', 'error');
      return;
    }

    const phoneNumber = '212642732997'; // رقم الجمعية
    const selectedLabel = this.getOptionLabel(this.selectedOption);
    
    // تجهيز نص الرسالة
    const message = `السلام عليكم ورحمة الله،
أريد تأكيد مساهمتي في مشروع: *إفطار الصائم*

*بيانات المتبرع:*
- الاسم: ${this.donorName}
- الهاتف: ${this.donorPhone}
- البريد: ${this.donorEmail}

*تفاصيل المساهمة:*
- نوع العطاء: ${selectedLabel}
- المبلغ: ${this.donationAmount} درهم

سأرسل لكم وصل التحويل البنكي حالاً. جزاكم الله خيراً.`;

    // إظهار تنبيه نجاح
    this.triggerToast(`جزاك الله خيراً يا ${this.donorName}، سيتم توجيهك للواتساب الآن.`, 'success');

    // فتح واتساب بعد ثانيتين
    setTimeout(() => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      // إغلاق المودال وتفريغ البيانات
      this.showStep2 = false;
      this.donorName = ''; 
      this.donorPhone = ''; 
      this.donorEmail = '';
    }, 2000);
  }
}
