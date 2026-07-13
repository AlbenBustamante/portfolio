import { Component } from '@angular/core';
import HomeComponent from './home/home.component';
import AboutMeComponent from './about-me/about-me.component';
import ProjectsComponent from './projects/projects.component';
import HireMeComponent from './hire-me/hire-me.component';

@Component({
  selector: 'app-me',
  imports: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    HireMeComponent,
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export default class MeComponent {}
