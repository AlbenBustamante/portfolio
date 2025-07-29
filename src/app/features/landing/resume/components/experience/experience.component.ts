import { Component } from '@angular/core';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { TranslatePipe } from '@ngx-translate/core';

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
