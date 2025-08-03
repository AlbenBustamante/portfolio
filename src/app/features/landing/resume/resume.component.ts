import { Component } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';

@Component({
  selector: 'app-resume',
  imports: [
    LandingSectionContainerComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificatesComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
