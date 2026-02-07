import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // خلي غير Router إيلا كنتي غتستعملي navigate

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
    // حيدنا RouterLink من هنا باش يمشي الـ Warning
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  constructor(private router: Router) {}
  
  // دالة السكرول إيلا كنتي باقة محتاجاها لشي زر
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}