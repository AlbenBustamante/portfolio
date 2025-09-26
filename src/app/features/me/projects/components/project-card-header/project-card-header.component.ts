import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card-header',
  imports: [],
  templateUrl: './project-card-header.component.html',
  styleUrl: './project-card-header.component.css',
})
export class ProjectCardHeaderComponent {
  readonly headline = input.required<string>();
  readonly thumbnail = input.required<string>();
}
