import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ResumeItemsComponent } from '../components/resume-items/resume-items.component';
import { ResumeSectionComponent } from '../components/resume-section/resume-section.component';
import { EducationItemComponent } from './education-item/education-item.component';

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
