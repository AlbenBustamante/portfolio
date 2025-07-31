import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'project/:url',
    loadComponent: () =>
      import('./features/project-details/project-details.component'),
  },
];
