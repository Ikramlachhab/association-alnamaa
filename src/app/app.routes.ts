import { Routes } from '@angular/router';
import { SalatRamadanComponent } from './pages/salat-ramadan/salat-ramadan';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';
import { BinaaMasajidComponent } from './pages/binaa-masajid/binaa-masajid';
import { HamlatDifaeComponent } from './pages/hamlat-difee/hamlat-difee'; 

export const routes: Routes = [
  { path: 'salat-ramadan', component: SalatRamadanComponent }, // <-- Zidi had l-ster
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: 'binaa-masajid', component: BinaaMasajidComponent },
  { path: 'hamlat-difee', component: HamlatDifaeComponent }, 
  { path: '', redirectTo: '/kafalat-yatim', pathMatch: 'full' }
];