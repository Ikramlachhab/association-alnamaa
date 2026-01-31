import { Routes } from '@angular/router';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';
import { BinaaMasajidComponent } from './pages/binaa-masajid/binaa-masajid';
import { HamlatDifeeComponent } from './pages/hamlat-difee/hamlat-difee'; // <-- Ajoute ça

export const routes: Routes = [
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: 'binaa-masajid', component: BinaaMasajidComponent },
  { path: 'hamlat-difee', component: HamlatDifeeComponent }, // <-- Et ça
  { path: '', redirectTo: '/kafalat-yatim', pathMatch: 'full' }
];