import { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Projects',
    loadComponent: () => import('./projects.component'),
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details.component'),
  },
] as Routes;
