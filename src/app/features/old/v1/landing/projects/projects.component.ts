import { Component } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
    TranslatePipe,
    LandingSectionContainerComponent,
    ProjectItemComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
