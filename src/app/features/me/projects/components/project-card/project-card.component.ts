import { Component, input } from '@angular/core';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { CardComponent } from '@components/card/card.component';
import { SourceCodeButtonComponent } from '../source-code-button/source-code-button.component';
import { ProjectCardHeaderComponent } from '../project-card-header/project-card-header.component';
import { ProjectCardContentComponent } from '../project-card-content/project-card-content.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [
    OpenLiveDemoComponent,
    CardComponent,
    SourceCodeButtonComponent,
    ProjectCardHeaderComponent,
    ProjectCardContentComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
