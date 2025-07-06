import { Component, Input } from '@angular/core';
import { IProject } from '../../../../../core/models/project.model';
import { ButtonComponent } from '../../../../../components/button/button.component';

@Component({
  selector: 'app-project-item',
  imports: [ButtonComponent],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input({ required: true }) project!: IProject;
}
