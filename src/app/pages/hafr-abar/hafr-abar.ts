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
  donationAmount = 5000;
  selectedOption = 'surface';
  activeCard = 0;
  showToast = false;

  donorPhone = '';
  donorEmail = ''; // نستخدمه للبريد الإلكتروني
  formError = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
    this.showToast = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  confirmDonation() { 
    if (this.donationAmount < 50) {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 5000);
      return;
    }
    this.showModal = false;
    this.showStep2 = true;
  }

  finalSubmit() {
    // التحقق من صيغة الهاتف المغربي
    const phoneRegex = /^(05|06|07)[0-9]{8}$/;
    
    // التحقق من صيغة البريد الإلكتروني
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!this.donorPhone || !this.donorEmail) {
      this.formError = true;
      alert("يرجى ملء جميع الحقول");
      return;
    }

    if (!phoneRegex.test(this.donorPhone)) {
      this.formError = true;
      alert("رقم الهاتف غير صحيح! يجب أن يبدأ بـ 05 أو 06 أو 07 ويتكون من 10 أرقام");
      return;
    }

    if (!emailRegex.test(this.donorEmail.toLowerCase())) {
      this.formError = true;
      alert("صيغة البريد الإلكتروني غير صحيحة!");
      return;
    }

    // إذا كانت البيانات صحيحة
    this.formError = false;
    alert(`جزاكم الله خيراً! تم تسجيل طلب حفر البئر باسم: ${this.donorEmail}. سنتواصل معكم قريباً.`);
    
    // إعادة تعيين الحقول وإغلاق النافذة
    this.showStep2 = false;
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() { 
    if (this.donationAmount >= 50) {
      alert('تمت الإضافة للسلة 🛒');
    } else {
      this.showToast = true;
    }
  }
}