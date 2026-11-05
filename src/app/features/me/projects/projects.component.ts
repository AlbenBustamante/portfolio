import { Component, inject } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { ProjectStore } from './projects.store';
import { ContainerComponent } from '@components/container/container.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { MeStore } from '../me.store';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, ContainerComponent, ProjectsSectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectStore],
})
export default class ProjectsComponent {
  private readonly _meStore = inject(MeStore);
  readonly store = inject(ProjectStore);

  get lang() {
    return this._meStore.lang().project;
  }
}
