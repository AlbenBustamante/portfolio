import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProjectStatus } from '../../models/project-status.enum';
import { ProjectStatusPipe } from '../../pipes/project-status.pipe';

@Component({
  selector: 'app-project-card-content',
  imports: [NgClass, ProjectStatusPipe],
  templateUrl: './project-card-content.component.html',
  styleUrl: './project-card-content.component.css',
})
export class ProjectCardContentComponent {
  readonly axis = input<'x' | 'y'>('y');
  readonly description = input.required<string>();
  readonly status = input.required<ProjectStatus>();
  readonly category = input.required<string>();
  readonly skills = input.required<string[]>();
}
