import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { RouterLink } from '@angular/router';
import { ProjectItemModel } from '@core/models/project.model';

@Component({
  selector: 'app-projects-section',
  imports: [SubtitleComponent, ProjectCardComponent, RouterLink],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  readonly headline = input<string>();
  readonly projects = input.required<ProjectItemModel[]>();
}
