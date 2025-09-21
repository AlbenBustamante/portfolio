import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./me.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component'),
      },
      {
        path: 'about-me',
        loadComponent: () => import('./about-me/about-me.component'),
      },
      {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component'),
      },
      {
        path: 'hire-me',
        loadComponent: () => import('./hire-me/hire-me.component'),
      },
    ],
  },
] as Routes;
