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
  // المتغيرات التي يطلبها الـ HTML
  showModal: boolean = false;
  showStep2: boolean = false;
  activeCard: number = 0;
  selectedOption: string = 'full';
  donationAmount: number = 350;
  
  donorPhone: string = '';
  donorEmail: string = '';
  formError: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // وظيفة تحريك العناصر عند ظهورها على الشاشة (Scroll Animation)
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

  // الوظائف (Methods)
  toggleModal() { 
    this.showModal = !this.showModal; 
    if (!this.showModal) this.showStep2 = false;
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  confirmDonation() { 
    if (this.donationAmount >= 20) {
      this.showModal = false;
      this.showStep2 = true;
    } else {
      alert('الحد الأدنى للمساهمة هو 20 درهم');
    }
  }

  finalSubmit() {
    if (!this.donorPhone || !this.donorEmail) {
      this.formError = true;
      alert('المرجو ملء البيانات المطلوبة');
      return;
    }
    alert(`جزاكم الله خيراً! لقد ساهمتم بمبلغ ${this.donationAmount} درهم.`);
    this.showStep2 = false;
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() { 
    alert('تمت إضافة الحقيبة المدرسية إلى سلة تبرعاتك 🛒');
  }
}