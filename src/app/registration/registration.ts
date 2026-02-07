import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../services/registration';

// 1. المعطيات والقواعد (Data & Rules)
const ALL_COURSES = [
  { id: 'nartaki', name: 'بكتاب ربي نرتقي' },
  { id: 'zahrawan', name: 'الزهروان (البقرة وآل عمران)' },
  { id: 'makassid', name: 'مقاصد السور' },
  { id: 'youssouf', name: 'تدبر سورة يوسف' },
  { id: 'matan', name: 'متن المقدمة الجزرية' },
  { id: 'sohbat-namaa-homme', name: 'صحبة النماء (ذكور)' },
  { id: 'koni-sahabia', name: 'كوني صحابية' },
  { id: 'atrija', name: 'نادي أترجة' },
];

const COURSE_RULES: any = {
  'nartaki': { minAge: 30, sexe: 'أنثى' },
  'zahrawan': { minAge: 16, maxAge: 35, sexe: 'أنثى' },
  'makassid': { minAge: 16, maxAge: 35, sexe: 'أنثى' },
  'youssouf': { minAge: 16, maxAge: 35, sexe: 'أنثى' },
  'matan': { minAge: 16, maxAge: 35, sexe: 'أنثى' },
  'sohbat-namaa-homme': { minAge: 10, maxAge: 14, sexe: 'ذكر' },
  'koni-sahabia': { minAge: 7, maxAge: 9, sexe: 'أنثى' },
  'atrija': { minAge: 7, maxAge: 12, sexe: 'أنثى' },
};

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  courses = ALL_COURSES; // باش نخدموا بها في HTML

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private regService: RegistrationService
  ) {}
  calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  // تصحيح السن إيلا كان عيد ميلادو مزال ما وصلش هاد العام
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
get filteredCourses() {
  const { age, gender } = this.registrationForm.value;
  
  // إيلا باقي ما دخل والو يبانو كاملين
  if (!age || !gender) return this.courses; 

  return this.courses.filter(course => {
    const rule = COURSE_RULES[course.id];
    if (!rule) return true;

    // التصحيح هنا: استعملنا rule.sexe عوض rule.gender
    const genderMatch = gender === rule.sexe;

    // تصفية حسب السن
    const userAge = Number(age);
    const ageMatch = (!rule.minAge || userAge >= rule.minAge) && 
                     (!rule.maxAge || userAge <= rule.maxAge);

    // سطر للـ Debug باش تشوفي القيم في المتصفح (F12)
    if (genderMatch && ageMatch) {
        console.log(`الدورة ${course.name} مطابقة لشروطك.`);
    }

    return genderMatch && ageMatch;
  });
}
  ngOnInit(): void {
    const preSelectedCourse = this.route.snapshot.queryParamMap.get('course') || '';

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required], // تأكدي أن الإدخال كيعطي العمر
      age: ['', [Validators.required, Validators.min(5)]], // زدنا حقل السن للتحقق
      nationality: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      courseName: [preSelectedCourse, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
    this.registrationForm.get('birthDate')?.valueChanges.subscribe(value => {
  if (value) {
    const age = this.calculateAge(value);
    // كنعمروا حقل السن أوتوماتيكياً (خاص يكون عندك حقل age في الفورم)
    this.registrationForm.patchValue({ age: age }, { emitEvent: false });
    console.log('السن المحسوب هو:', age);
  }
});

    if (preSelectedCourse) {
       // استعملي patchValue عوض disable إيلا بغيتي القيمة توصل في onSubmit
       // أو خليها disable واستعملي getRawValue() كما سأوضح في onSubmit
       this.registrationForm.get('courseName')?.disable();
    }
  }

  onSubmit() {
    // 1. استعمال getRawValue() باش نجيبو حتى الحقول اللي درنا ليها disable
    const formValues = this.registrationForm.getRawValue();
     const { password, confirmPassword } = formValues;
    if (this.registrationForm.valid) {
      const { password, confirmPassword, age, gender, courseName } = formValues;
    if (password.length < 8) {
    alert('خطأ: كلمة المرور يجب أن تتكون من 8 خانات على الأقل! 🔑');
    return;
  }
      // 2. تأكيد كلمة المرور
      if (password !== confirmPassword) {
        alert('خطأ: كلمات المرور غير متطابقة! ❌');
        return;
      }

      // 3. تطبيق منطق الشروط (Validation Logic)
      const rule = COURSE_RULES[courseName];
      if (rule) {
        // التحقق من الجنس
        if (rule.sexe && gender !== rule.sexe) {
          alert(`هذه الدورة مخصصة للـ ${rule.sexe} فقط. ⚠️`);
          return;
        }

        // التحقق من السن
        if ((rule.minAge && age < rule.minAge) || (rule.maxAge && age > rule.maxAge)) {
          let errorMsg = `السن غير مناسب لهذه الدورة. المطلوب: `;
          if (rule.minAge) errorMsg += `من ${rule.minAge} سنة `;
          if (rule.maxAge) errorMsg += `إلى ${rule.maxAge} سنة`;
          alert(errorMsg + '. ⚠️');
          return;
        }
      }

      // 4. إيلا داز كلشي بنجاح
      this.regService.formData = formValues;
      console.log('تم التحقق والتسجيل بنجاح ✅:', formValues);
      this.router.navigate(['/payment']);

    } else {
      alert('المرجو ملء جميع الخانات المطلوبة بشكل صحيح. ⚠️');
    }
  }
}