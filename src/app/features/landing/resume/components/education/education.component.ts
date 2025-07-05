import { Component } from '@angular/core';
import { LandingSubtitleComponent } from '../../../components/landing-subtitle/landing-subtitle.component';
import { ResumeItemComponent } from '../resume-item/resume-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';

@Component({
  selector: 'app-education',
  imports: [
    LandingSubtitleComponent,
    ResumeItemComponent,
    ResumeItemsComponent,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {}
