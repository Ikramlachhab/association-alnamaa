import { Routes } from '@angular/router';

// استيراد المكونات بالمسارات الصحيحة
import { IftarRamadanComponent } from './pages/iftar-ramadan/iftar-ramadan'; 
import { SalatRamadanComponent } from './pages/salat-ramadan/salat-ramadan';
import { HakibaMadrasiyaComponent } from './pages/hakiba-madrasiya/hakiba-madrasiya';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';
import { BinaaMasajidComponent } from './pages/binaa-masajid/binaa-masajid';
// تم التصحيح هنا: HamlatDifeeComponent (بالمطابقة مع تعريف الكلاس في ملف الـ TS)
import { HamlatDifeeComponent } from './pages/hamlat-difee/hamlat-difee'; 
import { AdhiyaComponent } from './pages/adhiya/adhiya'; 
import { MalabisFitrComponent } from './pages/malabis-fitr/malabis-fitr'; 

export const routes: Routes = [
  { path: 'salat-ramadan', component: SalatRamadanComponent },
  { path: 'hakiba-madrasiya', component: HakibaMadrasiyaComponent },
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: 'binaa-masajid', component: BinaaMasajidComponent },
  // تم التصحيح هنا أيضاً ليتناسب مع الاسم الجديد
  { path: 'hamlat-difee', component: HamlatDifeeComponent }, 
  { path: 'adhiya', component: AdhiyaComponent },
  { path: 'iftar-ramadan', component: IftarRamadanComponent },
  { path: 'malabis-fitr', component: MalabisFitrComponent },
  
  { path: '', redirectTo: '/kafalat-yatim', pathMatch: 'full' }
];