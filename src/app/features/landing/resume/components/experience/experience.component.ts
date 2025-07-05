import { Component } from '@angular/core';
import { ResumeItemComponent } from '../resume-item/resume-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { LandingSubtitleComponent } from '../../../components/landing-subtitle/landing-subtitle.component';

@Component({
  selector: 'app-experience',
  imports: [
    ResumeItemComponent,
    ResumeItemsComponent,
    LandingSubtitleComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
