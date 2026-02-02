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
  donationAmount = 2800;
  selectedOption = 'amal';
  activeCard = 0;
  showToast = false;

  // بيانات المتبرع (نفس منطق كفالة يتيم)
  donorName = ''; 
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 
  formError = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // دالة التحقق من البريد الإلكتروني
  private isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // دالة التحقق من رقم الهاتف (أرقام فقط وطول منطقي)
  private isValidPhone(phone: string): boolean {
    const re = /^[0-9]{8,15}$/; 
    return re.test(phone);
  }

  // دالة نسخ رقم الحساب
  copyRIB() {
    navigator.clipboard.writeText(this.bankAccount);
    alert('تم نسخ رقم الحساب (RIB) بنجاح');
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
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  private validateDonation(): boolean {
    if (this.donationAmount < 20) {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 5000);
      return false;
    }
    this.showToast = false;
    return true;
  }

  confirmDonation() { 
    if (this.validateDonation()) {
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  finalSubmit() {
    // التحقق من الشروط المطلوبة
    if (!this.donorName || !this.donorPhone || !this.donorEmail) {
      this.formError = true;
      return;
    }
    if (!this.isValidEmail(this.donorEmail)) {
      alert('يرجى إدخال بريد إلكتروني صحيح');
      return;
    }
    if (!this.isValidPhone(this.donorPhone)) {
      alert('يرجى إدخال رقم هاتف صحيح (أرقام فقط)');
      return;
    }

    this.formError = false;
    // الرسالة الذهبية المطابقة لمشروعك
    alert(`جزاك الله خيراً! سيتم التأكيد أن التبرع قد تم في حسابك الشخصي: ${this.donorEmail}`);
    
    this.showStep2 = false;
    this.donorName = '';
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() { 
    if (this.validateDonation()) {
      alert('تمت إضافة الأضحية إلى سلة التبرعات 🛒');
    }
  }
}
