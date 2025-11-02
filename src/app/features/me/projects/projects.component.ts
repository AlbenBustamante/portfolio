import { Component, inject } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { ProjectStore } from './projects.store';
import { ContainerComponent } from '@components/container/container.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, ContainerComponent, ProjectsSectionComponent],
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
