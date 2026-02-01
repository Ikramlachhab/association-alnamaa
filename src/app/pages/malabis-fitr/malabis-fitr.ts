import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-malabis-fitr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './malabis-fitr.html',
  styleUrl: './malabis-fitr.css'
})
export class MalabisFitrComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false;
  donationAmount = 450;
  selectedOption = 'full';
  activeCard = 0;
  
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

  confirmDonation() {
    if (this.donationAmount >= 20) {
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
    alert('شكراً لك! لقد ساهمت في رسم بسمة العيد على وجه يتيم. سيتم التواصل معك قريباً.');
    this.showStep2 = false;
    this.donorPhone = '';
    this.donorEmail = '';
  }

  addToCart() {
    if (this.donationAmount >= 20) {
      alert('تمت إضافة كسوة العيد إلى السلة 🛒');
    }
  }
}
