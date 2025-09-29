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
    redirectTo: '',
  },
] as Routes;
