import { Component } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import HomeComponent from './home/home.component';
import AboutMeComponent from './about-me/about-me.component';
import ProjectsComponent from './projects/projects.component';
import HireMeComponent from './hire-me/hire-me.component';

@Component({
  selector: 'app-me',
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    HireMeComponent,
  ],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export default class MeComponent {}
