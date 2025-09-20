import { Component, Input } from '@angular/core';
import { Education } from '@features/old/v1/core/models/education.model';

@Component({
  selector: 'app-education-item',
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.css',
})
export class EducationItemComponent {
  @Input({ required: true }) education!: Education;
}
