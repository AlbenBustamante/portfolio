import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProjectStatus } from '@core/models/project.enum';

@Component({
  selector: 'app-project-card-content',
  imports: [NgClass],
  templateUrl: './project-card-content.component.html',
  styleUrl: './project-card-content.component.css',
})
export class ProjectCardContentComponent {
  readonly description = input.required<string>();
  readonly status = input.required<ProjectStatus>();
  readonly statusLabel = input.required<string>();
  readonly category = input.required<string>();
  readonly skills = input.required<string[]>();
}
