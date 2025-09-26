import { Component } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, ProjectCardComponent, SubtitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent {}
