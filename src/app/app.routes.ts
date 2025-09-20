import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/features.routes'),
  },
  {
    path: 'old',
    loadChildren: () => import('./features/old/old.routes'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found.component'),
  },
];
