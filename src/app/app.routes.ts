import { Routes } from '@angular/router';
<<<<<<< HEAD
import { FooterComponent } from './components/footer/footer';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { RegistrationComponent } from './registration/registration'; 
import { MakassidSowarComponent } from './pages/makassid-sowar/makassid-sowar';
import { TahfidZahrawanComponent } from './pages/tahfid-zahrawan/tahfid-zahrawan';
import { NadiAtrijaComponent } from './pages/nadi-atrija/nadi-atrija';
import { KoniSahabiaComponent } from './pages/koni-sahabia/koni-sahabia';
import { MatanAljazriaComponent } from './pages/matan-aljazria/matan-aljazria';
import { HomeComponent } from './pages/home/home';
import { TadaborYoussoufComponent } from './pages/tadabor-youssouf/tadabor-youssouf';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details';
import { LoginComponent } from './components/login/login'; // تأكدي من المسار
import { QuranCourseComponent } from './pages/quran-course/quran-course';
import { SohbatNamaaComponent } from './pages/sohbat-namaa-homme/sohbat-namaa-homme';
import { AkonFataComponent } from './pages/akon-fata/akon-fata';

export const routes: Routes = [
    {
        path:"footer",
        component: FooterComponent
    },
    {
        path:"about",
        component: About
    },
    {
        path:"contact",
        component: Contact
    },
    
    {
        path:"registration",
        component: RegistrationComponent
    },

{ path: 'youssouf', component: TadaborYoussoufComponent },
{ path: 'makassid', component: MakassidSowarComponent },
{ path: 'zahrawan', component: TahfidZahrawanComponent },
{ path: 'atrija', component: NadiAtrijaComponent },
{ path: 'koni-sahabia', component: KoniSahabiaComponent },
{ path: 'matan-aljazria', component: MatanAljazriaComponent },
{ path: '', component: HomeComponent }, // Page par défaut (vide)
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegistrationComponent }, // هادا هو السطر المهم
{ path: 'payment', component: PaymentDetailsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'quran-course', component: QuranCourseComponent },
{ path: 'sohbat-namaa-homme', component: SohbatNamaaComponent },
{ path: 'akon-fata', component: AkonFataComponent },
];
=======

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
>>>>>>> fac1aebf509f40a12ceead912408894dcad794dd
