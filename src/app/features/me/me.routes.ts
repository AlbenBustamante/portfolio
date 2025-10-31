import { Routes } from '@angular/router';
import MeComponent from './me.component';
import HomeComponent from './home/home.component';

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
        title: 'Software Developer',
        component: HomeComponent,
      },
      {
        path: 'about-me',
        title: 'About Me',
        loadComponent: () => import('./about-me/about-me.component'),
      },
      {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./projects/projects.component'),
      },
      {
        path: 'hire-me',
        title: 'Hire Me',
        loadComponent: () => import('./hire-me/hire-me.component'),
      },
    ],
  },
] as Routes;
