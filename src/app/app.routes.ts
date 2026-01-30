import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [
  {
    path: 'kafalat-yatim',
    loadComponent: () => import('./pages/kafalat-yatim/kafalat-yatim').then(m => m.KafalatYatimComponent)
  },
  { path: '', redirectTo: 'kafalat-yatim', pathMatch: 'full' }
];
=======
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
import { MatanAljazriaComponent } from './pages/matan-aljazria/matan-aljazria';



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
{ path: 'matan-aljazria', component: MatanAljazriaComponent },
{ path: '', redirectTo: '/youssouf', pathMatch: 'full' }
];
>>>>>>> 097e52967e07d046b078d3c2a7980b6268b02df9
