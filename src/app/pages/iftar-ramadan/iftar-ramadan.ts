import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iftar-ramadan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iftar-ramadan.component.html',
  styleUrl: './iftar-ramadan.component.css'
})
export class IftarRamadanComponent {
  donationAmount: number = 0;
  selectedOption: string = '';

  setAmount(option: string, price: number) {
    this.selectedOption = option;
    this.donationAmount = price;
  }

  confirmDonation() {
    if (this.donationAmount > 0) {
      alert(`جزاك الله خيراً! تبرعك بقيمة ${this.donationAmount} درهم سيساهم في إفطار صائم.`);
    } else {
      alert('المرجو اختيار مبلغ للتبرع');
    }
  }
}