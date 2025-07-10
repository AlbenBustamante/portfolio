import { Component } from '@angular/core';
import { ResumeItemComponent } from '../resume-item/resume-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';

@Component({
  selector: 'app-education',
  imports: [ResumeSectionComponent, ResumeItemComponent, ResumeItemsComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {}
