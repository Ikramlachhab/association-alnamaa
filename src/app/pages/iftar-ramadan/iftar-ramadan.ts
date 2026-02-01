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
  donationAmount = 25;
  selectedOption = 'single';
  activeCard = 0;
  showToast = false;

  donorPhone = '';
  donorEmail = '';
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
  }

  setAmount(opt: string, amt: number) { 
    this.selectedOption = opt; 
    this.donationAmount = amt; 
  }

  private validate(): boolean {
    if (this.donationAmount < 20) {
      this.showToast = true;
      setTimeout(() => this.showToast = false, 5000);
      return false;
    }
    return true;
  }

  confirmDonation() {
    if (this.validate()) {
      this.showModal = false;
      this.showStep2 = true;
    }
  }

  finalSubmit() {
    if (!this.donorPhone || !this.donorEmail) {
      this.formError = true;
      return;
    }
    alert('تقبل الله منك! سيتم التواصل معك لتأكيد وصول مساهمتك لموائد الإفطار.');
    this.showStep2 = false;
    this.donorPhone = ''; 
    this.donorEmail = '';
  }

  addToCart() {
    if (this.validate()) alert('تمت إضافة وجبات الإفطار إلى سلة الخير 🛒');
  }
}