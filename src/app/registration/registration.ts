import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../services/registration'; // تأكدي من المسار الصحيح

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
  courses = ALL_COURSES;

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
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // دالة الفلترة (Filtered Courses)
  get filteredCourses() {
    const { age, gender } = this.registrationForm.value;
    if (!age || !gender) return this.courses; 

    return this.courses.filter(course => {
      const rule = COURSE_RULES[course.id];
      if (!rule) return true;
      const genderMatch = gender === rule.sexe;
      const userAge = Number(age);
      const ageMatch = (!rule.minAge || userAge >= rule.minAge) && 
                       (!rule.maxAge || userAge <= rule.maxAge);
      return genderMatch && ageMatch;
    });
  }

  ngOnInit(): void {
  // 1. إنشاء الـ Form أولاً
  this.registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(5)]],
    nationality: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    courseName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });

  // 2. التحقق من الـ URL (واش المستخدم جاي يسجل ف دورة جديدة؟)
  this.route.queryParams.subscribe(params => {
    const courseId = params['course'];

    if (courseId) {
      // إيلا كاين كورس ف الـ URL، يعني المستخدم بغا دورة جديدة
      // إذن نمسحو البيانات القديمة من السيرفيس ومن الفورم
      this.regService.formData = null; 
      this.registrationForm.reset();
      
      this.registrationForm.patchValue({
        courseName: courseId
      });
            this.registrationForm.get('courseName')?.disable();
      
      // إيلا بغيتي تحبسي الاختيار
      // this.registrationForm.get('courseName')?.disable();

    } else if (this.regService.formData) {
      // إيلا ما كاينش كورس ف الـ URL (يعني راجع من صفحة التعديل)
      // والبيانات كاينة ف السيرفيس، كنعمرو الفورم
      this.registrationForm.patchValue(this.regService.formData);
    }
  });

  // 3. حساب السن تلقائياً
  this.registrationForm.get('birthDate')?.valueChanges.subscribe(value => {
    if (value) {
      const age = this.calculateAge(value);
      this.registrationForm.patchValue({ age: age }, { emitEvent: false });
    }
  });
}

  onSubmit() {
    const formValues = this.registrationForm.getRawValue();
    if (this.registrationForm.valid) {
      const { password, confirmPassword, age, gender, courseName } = formValues;

      if (password !== confirmPassword) {
        alert('خطأ: كلمات المرور غير متطابقة! ❌');
        return;
      }

      // حفظ البيانات في السيرفيس قبل الانتقال
      const rule = COURSE_RULES[courseName];
    if (rule) {
      const genderMatch = gender === rule.sexe;
      const userAge = Number(age);
      const ageMatch = (!rule.minAge || userAge >= rule.minAge) && 
                       (!rule.maxAge || userAge <= rule.maxAge);

      if (!genderMatch || !ageMatch) {
        // رسالة الخطأ التي طلبتِها
        let errorMsg = `عذراً، لا يمكنك التسجيل في هذه الدورة لأن الشروط لا تنطبق عليك:\n`;
        if (!genderMatch) errorMsg += `- هذه الدورة مخصصة لـ (${rule.sexe}) فقط.\n`;
        if (!ageMatch) errorMsg += `- السن المطلوب ما بين ${rule.minAge || 0} و ${rule.maxAge || 'ما فوق'} سنة.`;
        
        alert(errorMsg); // يمكنك استبدال alert بـ Toast إذا كنتِ تستخدمينه
        return; // منع الانتقال لصفحة الدفع
      }
    }

    // 3. إذا كان كل شيء صحيحاً، ننتقل للدفع
    this.regService.formData = formValues;
    this.router.navigate(['/payment']);

  } else {
    alert('المرجو ملء جميع الخانات المطلوبة بشكل صحيح. ⚠️');
  }
  }
}