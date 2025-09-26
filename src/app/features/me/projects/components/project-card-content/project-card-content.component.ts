import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card-content',
  imports: [],
  templateUrl: './project-card-content.component.html',
  styleUrl: './project-card-content.component.css',
})
export class ProjectCardContentComponent {
  readonly description = input.required<string>();
  readonly category = input.required<string>();
  readonly skills = input.required<string[]>();
}
