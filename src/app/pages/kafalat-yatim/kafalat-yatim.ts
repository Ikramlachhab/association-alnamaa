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
  showStep2 = false; // التحكم في الصفحة الثانية
  donationAmount = 250;
  selectedOption = 'month';
  activeCard = 0;
  showToast = false;

  // بيانات المتبرع
  donorPhone = '';
  donorEmail = '';
  formError = false;

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
    this.showToast = false; 
    this.showStep2 = false; // إغلاق الصفحة الثانية إذا أغلق المستخدم النافذة
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
      // بدلاً من الـ alert، نفتح الصفحة الثانية
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  finalSubmit() {
    if (!this.donorPhone || !this.donorEmail) {
      this.formError = true;
      return;
    }
    this.formError = false;
    alert(`نضمن لكم المصداقية التامة. جزاكم الله خيراً! سيتم التواصل معكم عبر الهاتف لإتمام الإجراءات.`);
    this.showStep2 = false;
    // إعادة تصفير البيانات
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() { 
    if (this.validateDonation()) {
      alert('تمت إضافة الكفالة إلى سلة التبرعات 🛒');
    }
  }
}