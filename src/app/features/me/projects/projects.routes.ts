import { Routes } from '@angular/router';
import ProjectsComponent from './projects.component';

export default [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details.component'),
  },
] as Routes;
