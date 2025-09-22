import { Component } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-projects',
  imports: [TitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent {}
