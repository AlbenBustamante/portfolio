import { Component } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { ProjectComponent } from './components/project/project.component';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent, ProjectComponent, SubtitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent {}
