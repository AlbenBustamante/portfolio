import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResumeItemsComponent } from '../components/resume-items/resume-items.component';
import { ResumeSectionComponent } from '../components/resume-section/resume-section.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  imports: [
    TranslatePipe,
    ResumeItemsComponent,
    ResumeSectionComponent,
    ExperienceItemComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
