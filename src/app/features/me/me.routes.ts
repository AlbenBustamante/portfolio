import { Routes } from '@angular/router';
import MeComponent from './me.component';

export default [
  {
    path: '',
    component: MeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
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
