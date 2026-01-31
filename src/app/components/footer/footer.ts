import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer><p dir="rtl">جميع الحقوق محفوظة © 2026</p></footer>`,
  styles: [`footer { text-align: center; padding: 20px; background: #f1f1f1; }`]
})
export class FooterComponent {}