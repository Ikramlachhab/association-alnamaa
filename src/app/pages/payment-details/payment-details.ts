import { Component, OnInit } from '@angular/core'; // زدنا OnInit
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationService } from '../../services/registration'; // تأكدي من المسار الصحيح للسيرفيس هنا

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-details.html',
  styleUrl: './payment-details.css'
})
export class PaymentDetailsComponent implements OnInit {
  // 1. كنعرفو المتغيرات بلا ما نعطيوهم قيمة دابا
  userName: string = '';
  selectedCourse: string = '';
  selectedCount: number = 1;
  pricePerCourse: number = 200;

  // 2. الـ Constructor كيكون فيه غير الحقن (Injection)
  constructor(public regService: RegistrationService) {}

  ngOnInit(): void {
    // 3. هنا فين كنعطيو القيم ملي كتحل الصفحة
    this.userName = this.regService.formData?.firstName || 'أخي/أختي';
    this.selectedCourse = this.getCourseName(this.regService.formData?.courseName);
  }

  getCourseName(value: string): string {
    const courses: { [key: string]: string } = {
      'zahrawan': 'دورة الزهروان',
      'nartaki': 'دورة بكتاب ربي نرتقي',
      'koni-sahabia': 'دورة كوني صحابية',
      'youssouf': 'دورة تدبر سورة يوسف',
      'atrija': 'نادي الأترجة',
      'makassid': 'مقاصد سور القرآن',
      'matan': 'متن الجزرية'
    };
    return courses[value] || 'الدورة المختارة';
  }

  get totalAmount(): number {
    return this.selectedCount * this.pricePerCourse;
  }

  setCourseCount(count: number) {
    this.selectedCount = count;
  }

  copyRIB() {
    const rib = '190780211160436921000183';
    navigator.clipboard.writeText(rib).then(() => {
      alert('تم نسخ رقم الحساب (RIB) بنجاح ✅');
    });
  }

  sendToWhatsApp() {
    const phoneNumber = '212612345678';
    const message = `السلام عليكم، أنا ${this.userName}، سجلت في ${this.selectedCourse}. أريد إرسال وصل الأداء.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}