import { Routes } from '@angular/router';

// --- استيراد المكونات الثقافية  ---
import { HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { RegistrationComponent } from './registration/registration'; 
import { MakassidSowarComponent } from './pages/makassid-sowar/makassid-sowar';
import { TahfidZahrawanComponent } from './pages/tahfid-zahrawan/tahfid-zahrawan';
import { NadiAtrijaComponent } from './pages/nadi-atrija/nadi-atrija';
import { KoniSahabiaComponent } from './pages/koni-sahabia/koni-sahabia';
import { MatanAljazriaComponent } from './pages/matan-aljazria/matan-aljazria';
import { TadaborYoussoufComponent } from './pages/tadabor-youssouf/tadabor-youssouf';
import { QuranCourseComponent } from './pages/quran-course/quran-course';
import { SohbatNamaaComponent } from './pages/sohbat-namaa-homme/sohbat-namaa-homme';
import { AkonFataComponent } from './pages/akon-fata/akon-fata';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details';
import { LoginComponent } from './components/login/login';
import { FooterComponent } from './components/footer/footer';

// --- استيراد المكونات الاجتماعية ) ---
import { IftarRamadanComponent } from './pages/iftar-ramadan/iftar-ramadan'; 
import { SalatRamadanComponent } from './pages/salat-ramadan/salat-ramadan';
import { HakibaMadrasiyaComponent } from './pages/hakiba-madrasiya/hakiba-madrasiya';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';
import { BinaaMasajidComponent } from './pages/binaa-masajid/binaa-masajid';
import { HamlatDifeeComponent } from './pages/hamlat-difee/hamlat-difee'; 
import { AdhiyaComponent } from './pages/adhiya/adhiya'; 
import { MalabisFitrComponent } from './pages/malabis-fitr/malabis-fitr'; 

export const routes: Routes = [
  // الصفحة الرئيسية
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  // صفحات عامة
  { path: "about", component: About },
  { path: "contact", component: Contact },
  { path: "registration", component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentDetailsComponent },
  { path: "footer", component: FooterComponent },

  // مسارات المشاريع الثقافية
  { path: 'youssouf', component: TadaborYoussoufComponent },
  { path: 'makassid', component: MakassidSowarComponent },
  { path: 'zahrawan', component: TahfidZahrawanComponent },
  { path: 'atrija', component: NadiAtrijaComponent },
  { path: 'koni-sahabia', component: KoniSahabiaComponent },
  { path: 'matan-aljazria', component: MatanAljazriaComponent },
  { path: 'quran-course', component: QuranCourseComponent },
  { path: 'sohbat-namaa-homme', component: SohbatNamaaComponent },
  { path: 'akon-fata', component: AkonFataComponent },

  // مسارات المشاريع الاجتماعية
  { path: 'salat-ramadan', component: SalatRamadanComponent },
  { path: 'hakiba-madrasiya', component: HakibaMadrasiyaComponent },
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: 'binaa-masajid', component: BinaaMasajidComponent },
  { path: 'hamlat-difee', component: HamlatDifeeComponent }, 
  { path: 'adhiya', component: AdhiyaComponent },
  { path: 'iftar-ramadan', component: IftarRamadanComponent },
  { path: 'malabis-fitr', component: MalabisFitrComponent },

  // أي مسار غير معروف يرجع لـ home
  { path: '**', redirectTo: '' }
];