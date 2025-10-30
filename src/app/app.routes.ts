import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/me/me.routes'),
  },
  {
    path: 'old',
    loadChildren: () => import('./features/old/old.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
