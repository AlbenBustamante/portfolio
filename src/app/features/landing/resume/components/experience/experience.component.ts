import { Component } from '@angular/core';
import { ResumeItemComponent } from '../resume-item/resume-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';

@Component({
  selector: 'app-experience',
  imports: [ResumeItemComponent, ResumeItemsComponent, ResumeSectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
