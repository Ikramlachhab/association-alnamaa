import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tadabor-youssouf',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tadabor-youssouf.html',
  styleUrl: './tadabor-youssouf.css'
})
export class TadaborYoussoufComponent {
  // المعلومات المستخرجة من الإعلان والورقة التقنية
  title = 'دورة تدبر سورة يوسف';
  instructor = 'الأستاذة منى مصانو';
  price = '200 درهم (دورة 3 أشهر)';
}