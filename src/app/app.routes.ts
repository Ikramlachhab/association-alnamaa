import { Routes } from '@angular/router';
import { KafalatYatimComponent } from './pages/kafalat-yatim/kafalat-yatim';
import { HafrAbarComponent } from './pages/hafr-abar/hafr-abar';

export const routes: Routes = [
  { path: 'kafalat-yatim', component: KafalatYatimComponent },
  { path: 'hafr-abar', component: HafrAbarComponent },
  { path: '', redirectTo: '/kafalat-yatim', pathMatch: 'full' }
];