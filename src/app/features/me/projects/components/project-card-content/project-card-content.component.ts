import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card-content',
  imports: [NgClass],
  templateUrl: './project-card-content.component.html',
  styleUrl: './project-card-content.component.css',
})
export class ProjectCardContentComponent {
  readonly axis = input<'x' | 'y'>('y');
  readonly description = input.required<string>();
  readonly category = input.required<string>();
  readonly skills = input.required<string[]>();
}
