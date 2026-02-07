import { Routes } from '@angular/router';
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
