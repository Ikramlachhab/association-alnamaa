import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  showForgotModal: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      // حيدنا confirmPassword من هنا باش يولي الفورم Valid بمجرد تعمري الإيميل والباسورد
    });
  }

  // الدالة اللي كتحل وتشد نافذة استرجاع كلمة المرور
  toggleForgotModal() {
    this.showForgotModal = !this.showForgotModal;
  }

  // الدالة اللي كتعالج إرسال رابط Gmail
  sendResetLink(email: string) {
    if (email && email.includes('@')) {
      alert(`تم إرسال رابط استعادة كلمة المرور إلى: ${email} ✅`);
      this.showForgotModal = false; 
    } else {
      alert('يرجى إدخال بريد إلكتروني صحيح ⚠️');
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      // مابقاش عندنا تأكيد، دابا كاندوزو نيشان
      console.log('بيانات الدخول:', this.loginForm.value);
      alert('تم تسجيل الدخول بنجاح! ✨');
      // هنا تقدري تزيدي التوجيه لصفحة المشارك:
      // this.router.navigate(['/dashboard']);
    }
  }
}