import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hamlat-difae',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hamlat-difee.html',
  styleUrl: './hamlat-difee.css'
})
export class HamlatDifaeComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false;
  donationAmount = 200;
  selectedOption = 'blanket';
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

    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: HTMLElement) => observer.observe(el));
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
    if (this.donationAmount < 10) {
      alert('الحد الأدنى للمساهمة هو 10 دراهم');
      return;
    }
    this.showModal = false;
    this.showStep2 = true;
  }

  finalSubmit() {
    if (!this.donorPhone || !this.donorEmail) {
      this.formError = true;
      return;
    }
    this.formError = false;
    alert(`جزاكم الله خيراً! مساهمتكم في حملة دفء 7 قيد المعالجة. سيتم التواصل معكم لإتمام الإجراءات.`);
    this.showStep2 = false;
    this.donorPhone = '';
    this.donorEmail = '';
  }
}
