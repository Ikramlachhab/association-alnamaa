import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hamlat-difae',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hamlat-difae.html',
  styleUrl: './hamlat-difae.css'
})
export class HamlatDifaeComponent implements AfterViewInit {
  showModal = false;
  showStep2 = false;
  donationAmount = 200;
  activeCard = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'active');
        }
      });
    }, { threshold: 0.1 });

    this.el.nativeElement.querySelectorAll('.reveal').forEach((item: any) => observer.observe(item));
  }

  toggleModal() { this.showModal = !this.showModal; }
  
  setAmount(type: string, amt: number) { this.donationAmount = amt; }

  confirmDonation() {
    alert('جزاك الله خيراً.. لقد بدأت حرارة عطائك بالوصول لمن يحتاجها. سيتم التواصل معك لإتمام التبرع.');
    this.showModal = false;
  }
}