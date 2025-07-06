import { Component } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-resume',
  imports: [
    LandingSectionContainerComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
