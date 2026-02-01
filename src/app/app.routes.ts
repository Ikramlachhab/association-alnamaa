import { Routes } from '@angular/router';

// استيراد المكونات (تأكدي أن أسماء الملفات في المجلدات تطابق هذه المسارات)
import { IftarRamadanComponent } from './pages/iftar-ramadan/iftar-ramadan'; 
import { SalatRamadanComponent } from './pages/salat-ramadan/salat-ramadan';
import { HakibaMadrasiyaComponent } from './pages/hakiba-madrasiya/hakiba-madrasiya';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';
import { BinaaMasajidComponent } from './pages/binaa-masajid/binaa-masajid';
import { HamlatDifaeComponent } from './pages/hamlat-difee/hamlat-difee'; 
import { AdhiyaComponent } from './pages/adhiya/adhiya'; 

// 1. إضافة المكون الجديد لملابس الفطر
import { MalabisFitrComponent } from './pages/malabis-fitr/malabis-fitr.component'; 

export const routes: Routes = [
  { path: 'salat-ramadan', component: SalatRamadanComponent },
  { path: 'hakiba-madrasiya', component: HakibaMadrasiyaComponent },
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: 'binaa-masajid', component: BinaaMasajidComponent },
  { path: 'hamlat-difee', component: HamlatDifaeComponent }, 
  { path: 'adhiya', component: AdhiyaComponent },
  { path: 'iftar-ramadan', component: IftarRamadanComponent },
  
  // 2. إضافة مسار ملابس الفطر هنا
  { path: 'malabis-fitr', component: MalabisFitrComponent },
  
  // المسار الافتراضي
  { path: '', redirectTo: '/kafalat-yatim', pathMatch: 'full' }
];