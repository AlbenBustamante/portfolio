import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export default [
  {
    path: '',
    loadComponent: () => import('./v1.component'),
    children: [
      {
        path: '',
        title: 'v1 - Software Developer',
        component: LandingComponent,
      },
      {
        path: 'project/:url',
        title: 'v1 - Project Details',
        loadComponent: () =>
          import('./project-details/project-details.component'),
      },
    ],
  },
] as Routes;
