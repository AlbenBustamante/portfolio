import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card-content',
  imports: [],
  templateUrl: './project-card-content.component.html',
  styleUrl: './project-card-content.component.css',
})
export class ProjectCardContentComponent {
  readonly skills = ['Java', 'Spring Boot', 'Angular'];
}
