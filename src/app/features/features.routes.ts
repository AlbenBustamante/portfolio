import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadChildren: () => import('./me/me.routes'),
  },
  {
    path: 'old',
    loadChildren: () => import('./old/old.routes'),
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component'),
  },
] as Routes;
