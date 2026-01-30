import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Registration } from './pages/registration/registration';
import { TadaborYoussoufComponent } from './pages/tadabor-youssouf/tadabor-youssouf';
import { MakassidSowarComponent } from './pages/makassid-sowar/makassid-sowar';
import { TahfidZahrawanComponent } from './pages/tahfid-zahrawan/tahfid-zahrawan';
import { NadiAtrijaComponent } from './pages/nadi-atrija/nadi-atrija';
import { KoniSahabiaComponent } from './pages/koni-sahabia/koni-sahabia';



export const routes: Routes = [
    {
        path:"",
        component: Home
    },
    {
        path:"footer",
        component: Footer
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
        component: Registration
    },

{ path: 'youssouf', component: TadaborYoussoufComponent },
{ path: 'makassid', component: MakassidSowarComponent },
{ path: 'zahrawan', component: TahfidZahrawanComponent },
{ path: 'atrija', component: NadiAtrijaComponent },
{ path: 'koni-sahabia', component: KoniSahabiaComponent },
{ path: '', redirectTo: '/youssouf', pathMatch: 'full' }
];
