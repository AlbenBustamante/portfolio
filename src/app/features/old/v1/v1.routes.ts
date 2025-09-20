import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export default [
  {
    path: '',
    loadComponent: () => import('./v1.component'),
    children: [
      { path: '', component: LandingComponent },
      {
        path: 'project/:url',
        loadComponent: () =>
          import('./project-details/project-details.component'),
      },
    ],
  },
] as Routes;
