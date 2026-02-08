import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}
  goToPage(path: string) {
    console.log('جاري الانتقال إلى:', path); // هادي باش تشوفي في الـ Console واش الزر كيتبرك
    this.router.navigate([path]);
  }
  /**
   * دالة عامة للسكرول داخل الصفحة الرئيسية
   * كتخدم حتى إيلا كان المستخدم في صفحة أخرى (بحر الزهروان)
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();

    // إيلا كنا ديجا في الهوم
    if (this.router.url === '/' || this.router.url === '/home') {
      this.doScroll(sectionId);
    } else {
      // إيلا كنا فصفحة أخرى، كنرجعو للهوم عاد كنقلبو على القسم
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.doScroll(sectionId);
        }, 300);
      });
    }
  }

  // هادي هي الدالة اللي كتحيد الخطأ ديال "عن الجمعية"
  scrollToAbout(event: Event) {
    this.scrollToSection(event, 'detailed-about');
  }

  // هادي هي الدالة اللي كتحيد الخطأ ديال "مشاريع ثقافية"
  scrollToCultural(event: Event) {
    this.scrollToSection(event, 'cultural-projects-section');
  }

  // تنفيذ عملية السكرول الفعلي
  private doScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}