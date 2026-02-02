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
  donationAmount = 250; // القيمة الافتراضية للكسوة
  selectedOption = 'clothes'; 
  activeCard = 0;
  showToast = false;
  addedToCartMsg = false;

  donorName = ''; 
  donorPhone = '';
  donorEmail = '';
  bankAccount = '190780211160436921000183'; 
  formError = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  private isValidPhone(phone: string): boolean {
    const re = /^[0-9]{8,15}$/; 
    return re.test(phone);
  }

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
    this.showStep2 = false;
    this.addedToCartMsg = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  private validateDonation(): boolean {
    if (this.donationAmount < 20) {
      alert('المبلغ الأدنى للمساهمة هو 20 درهم');
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
      alert('يرجى ملء كافة البيانات');
      return;
    }
    if (!this.isValidEmail(this.donorEmail) || !this.isValidPhone(this.donorPhone)) {
      alert('يرجى التأكد من صحة البيانات');
      return;
    }

    alert(`جزاك الله خيراً! تم تأكيد مساهمتك بمبلغ ${this.donationAmount} درهم لحملة دفء.`);
    this.showStep2 = false;
    this.donorName = '';
    this.donorPhone = '';
    this.donorEmail = '';
  }
}
