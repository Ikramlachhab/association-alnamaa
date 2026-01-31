import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binaa-masajid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binaa-masajid.html', // تأكد من الاسم هنا
  styleUrl: './binaa-masajid.css'      // تأكد من الاسم هنا
})
export class BinaaMasajidComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false;
  showToast = false; // هذا هو المتغير الذي كان ينقصك
  donationAmount = 1000;
  selectedOption = 'foundation';
  activeCard = 0;

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
    return true;
  }

  confirmDonation() { 
    if (this.validateDonation()) {
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
    
    alert(`تقبل الله طاعتكم! ✨\nلقد ساهمتم في بناء بيت من بيوت الله. سنوافيكم بالتحديثات قريباً.`);
    
    this.showStep2 = false;
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() { 
    if (this.validateDonation()) {
      alert('تمت إضافة المساهمة إلى سلة التبرعات 🛒');
    }
  }
}
