import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'v1',
    loadChildren: () => import('./v1/v1.routes'),
  },
] as Routes;
