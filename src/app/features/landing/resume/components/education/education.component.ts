import { Component } from '@angular/core';
import { EducationItemComponent } from '../education-item/education-item.component';
import { ResumeItemsComponent } from '../resume-items/resume-items.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  imports: [
    TranslatePipe,
    ResumeSectionComponent,
    EducationItemComponent,
    ResumeItemsComponent,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {}
