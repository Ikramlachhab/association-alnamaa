import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'kafalat-yatim',
    loadComponent: () => import('./pages/kafalat-yatim/kafalat-yatim').then(m => m.KafalatYatimComponent)
  },
  { path: '', redirectTo: 'kafalat-yatim', pathMatch: 'full' }
];