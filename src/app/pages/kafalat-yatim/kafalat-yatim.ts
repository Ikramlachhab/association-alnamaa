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
  donationAmount = 250;
  selectedOption = 'month';
  activeCard = 0;
  showToast = false; // التحكم في ظهور التنبيه الأحمر

  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
    this.showToast = false; // إغلاق التنبيه عند فتح/إغلاق المودال
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  // وظيفة التحقق المكتشفة من الفيديو
  private validateDonation(): boolean {
    if (this.donationAmount < 20) {
      this.showToast = true;
      // إخفاء التنبيه تلقائياً بعد 5 ثوانٍ
      setTimeout(() => this.showToast = false, 5000);
      return false;
    }
    this.showToast = false;
    return true;
  }

  confirmDonation() { 
    if (this.validateDonation()) {
      alert(`جزاكم الله خيراً! سيتم معالجة تبرعكم بقيمة ${this.donationAmount} درهم.`);
      this.showModal = false; 
    }
  }

  addToCart() { 
    if (this.validateDonation()) {
      alert('تمت إضافة الكفالة إلى سلة التبرعات 🛒');
    }
  }
}
