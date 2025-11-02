import { Component, input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { ProjectCardContentComponent } from '../project-card-content/project-card-content.component';
import { Project } from '../../models/project.model';
import { ButtonComponent } from '@components/button/button.component';
import { RightArrowIconComponent } from '../right-arrow-icon/right-arrow-icon.component';

@Component({
  selector: 'app-project-card',
  imports: [
    CardComponent,
    ProjectCardContentComponent,
    ButtonComponent,
    RightArrowIconComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  readonly loading = input<'eager' | 'lazy'>('eager');
  readonly project = input.required<Project>();
}
