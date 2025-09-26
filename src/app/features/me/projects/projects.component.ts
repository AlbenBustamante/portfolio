import { Component, inject } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { ProjectStore } from './projects.store';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, ProjectCardComponent, SubtitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectStore],
})
export default class ProjectsComponent {
  readonly store = inject(ProjectStore);

  constructor() {
    this.store.fetchAll();
  }
}
