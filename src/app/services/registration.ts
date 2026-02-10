import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // هاد السطر هو اللي كيحل مشكلة Injection Token
})
export class RegistrationService {
  formData: any = null;
}