import { Component } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';

@Component({
  selector: 'app-projects',
  imports: [LandingSectionContainerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
