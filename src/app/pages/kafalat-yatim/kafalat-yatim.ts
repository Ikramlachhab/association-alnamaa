import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kafalat-yatim',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kafalat-yatim.html',
  styleUrl: './kafalat-yatim.css'
})
export class KafalatYatimComponent {
  showModal = false;
  donationAmount = 250;
  selectedOption = 'month';

  cards = [
    { 
      title: 'مسؤوليتنا جميعاً', 
      emoji: '🤝', 
      desc: 'ليست مجرد إحسان، بل هي أمانة في أعناقنا لضمان حياة كريمة لمن فقد السند. كن أنت العائلة التي يفتقدونها.' 
    },
    { 
      title: 'مدة الكفالة', 
      emoji: '♾️', 
      desc: 'عطاؤك لا يحده زمن؛ فالعناية باليتيم رحلة مستمرة تبدأ بلمسة حانية وتدوم كأثر طيب لا ينقطع أبداً.' 
    },
    { 
      title: 'قيمة الكفالة', 
      emoji: '💎', 
      desc: 'قليلٌ دائم خيرٌ من كثير منقطع. مساهمتك البسيطة هي استثمار في الجنة وبناء لمستقبل جيل واعد.' 
    }
  ];

  toggleModal() { this.showModal = !this.showModal; }
  setAmount(opt: string, amt: number) { this.selectedOption = opt; this.donationAmount = amt; }
  confirmDonation() { alert(`جزاكم الله خيراً، تم استلام تبرعكم بمبلغ ${this.donationAmount} درهم.`); this.showModal = false; }
  addToCart() { alert('تمت إضافة الكفالة إلى سلة التبرعات 🛒'); }
}