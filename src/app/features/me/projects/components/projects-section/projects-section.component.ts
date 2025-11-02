import { Component, input } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-section',
  imports: [SubtitleComponent, ProjectCardComponent, RouterLink],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  readonly headline = input.required<string>();
  readonly projects = input.required<Project[]>();
}
