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
// قمت بتغيير a إلى A هنا لتفادي أخطاء الـ Export
export class AdhiyaComponent implements AfterViewInit {
  
  showModal: boolean = false;
  showStep2: boolean = false;
  activeCard: number = 2; 
  donationAmount: number = 2800;
  
  donorPhone: string = '';
  donorEmail: string = '';
  selectedOption: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = this.el.nativeElement.querySelectorAll('.reveal');
    revealElements.forEach((el: HTMLElement) => observer.observe(el));
  }

  toggleModal() {
    this.showModal = !this.showModal;
    if (!this.showModal) this.showStep2 = false;
  }

  selectCard(id: number, amount: number) {
    this.activeCard = id;
    this.donationAmount = amount;
    this.showModal = true;
  }

  confirmDonation() {
    if (this.donationAmount > 0) {
      this.showModal = false;
      this.showStep2 = true;
    } else {
      alert('المرجو إدخال مبلغ صحيح');
    }
  }

  finalSubmit() {
    if (this.donorPhone && this.donorEmail) {
      alert(`تقبل الله ضحيتك. تم تسجيل مبلغ ${this.donationAmount} درهم بنجاح. سنصلك عبر الواتساب للتوثيق.`);
      this.showStep2 = false;
      this.resetForm();
    } else {
      alert('المرجو ملء جميع الخانات');
    }
  }

  resetForm() {
    this.donorPhone = '';
    this.donorEmail = '';
    // نرجع لبطاقة افتراضية أو نتركها 0
    this.activeCard = 2; 
  }
}