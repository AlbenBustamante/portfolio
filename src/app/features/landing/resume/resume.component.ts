import { Component } from '@angular/core';
import { LandingSubtitleComponent } from '../components/landing-subtitle/landing-subtitle.component';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-resume',
  imports: [
    LandingSubtitleComponent,
    LandingSectionContainerComponent,
    EducationComponent,
    ExperienceComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
