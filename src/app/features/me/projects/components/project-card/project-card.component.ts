import { Component, input } from '@angular/core';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { CardComponent } from '@components/card/card.component';
import { SourceCodeButtonComponent } from '../source-code-button/source-code-button.component';
import { ProjectCardContentComponent } from '../project-card-content/project-card-content.component';
import { Project } from '../../models/project.model';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [
    NgClass,
    CardComponent,
    ProjectCardContentComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  readonly loading = input<'eager' | 'lazy'>('eager');
  readonly axis = input<'x' | 'y'>('y');
  readonly project = input.required<Project>();
}
