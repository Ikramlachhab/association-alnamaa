import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salat-ramadan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salat-ramadan.html',
  styleUrl: './salat-ramadan.css'
})
export class SalatRamadanComponent {
  showModal = false;
  donationAmount = 0;
  selectedOption = '';

  // Function bach t-7elli w t-seddi l-modal
  toggleModal() {
    this.showModal = !this.showModal;
  }

  // Function bach t-7etti l-mablagh melli katzetti 3la chi s'hem
  setAmount(option: string, amount: number) {
    this.selectedOption = option;
    this.donationAmount = amount;
    this.showModal = true; // Ghadi t-7el l-modal automatically melli t-cliki 3la card
  }
}