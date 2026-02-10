import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
// التصحيح: نرجع لـ components تم لـ app باش نلقاو registration.ts
import { RegistrationService } from '../../services/registration';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(
    private router: Router,
    // استعملي public باش نضمنوا أن Angular يشوفو مزيان
    public regService: RegistrationService 
  ) {}

  createNewAccount() {
    console.log('Clearing data...');
    // هادي دابا غتمسح البيانات اللي مخبية في السيرفيس اللي وسط registration.ts
    this.regService.formData = null; 
    this.router.navigate(['/registration']); 
  }

  goToPage(path: string) {
    console.log('جاري الانتقال إلى:', path);
    this.router.navigate([path]);
  }

  /**
   * دالة عامة للسكرول داخل الصفحة الرئيسية
   */
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();

    if (this.router.url === '/' || this.router.url === '/home') {
      this.doScroll(sectionId);
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.doScroll(sectionId);
        }, 300);
      });
    }
  }

  scrollToAbout(event: Event) {
    this.scrollToSection(event, 'detailed-about');
  }

  scrollToCultural(event: Event) {
    this.scrollToSection(event, 'cultural-projects-section');
  }

  private doScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}