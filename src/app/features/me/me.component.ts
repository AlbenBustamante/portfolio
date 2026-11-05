import { Component, inject } from '@angular/core';
import HomeComponent from './home/home.component';
import AboutMeComponent from './about-me/about-me.component';
import ProjectsComponent from './projects/projects.component';
import HireMeComponent from './hire-me/hire-me.component';
import { MeStore } from './me.store';

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
  providers: [MeStore],
})
export default class MeComponent {
  readonly store = inject(MeStore);

  ngOnInit() {
    this.store.fetch();
  }
}
