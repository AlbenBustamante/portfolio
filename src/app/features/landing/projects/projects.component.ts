import { Component, signal } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { IProject } from '../../../core/models/project.model';
import { ProjectItemComponent } from './components/project-item/project-item.component';

@Component({
  selector: 'app-projects',
  imports: [LandingSectionContainerComponent, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly projects = signal<IProject[]>([
    { id: 8, name: 'Portfolio' },
    { id: 7, name: 'FinManage' },
    { id: 6, name: 'COP Calculator' },
    { id: 5, name: 'Fun Virtual Reading' },
    { id: 4, name: 'ToDo List' },
    { id: 3, name: 'Microblogging' },
    { id: 2, name: 'Register Sales' },
    { id: 1, name: 'Banking Correspondent' },
  ]);
}
