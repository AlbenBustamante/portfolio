import { Component } from '@angular/core';
import { EducationItemComponent } from '../education-item/education-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';

@Component({
  selector: 'app-experience',
  imports: [EducationItemComponent, ResumeItemsComponent, ResumeSectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
