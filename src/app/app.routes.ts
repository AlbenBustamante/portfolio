import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/me/me.component'),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('@features/project-details/project-details.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
