import { Component, input } from '@angular/core';
import { EducationItemModel } from '@core/models/education.model';
import { BulletContentComponent } from '@features/me/about-me/components/bullet-content/bullet-content.component';

@Component({
  selector: 'app-education-item',
  imports: [BulletContentComponent],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.css',
})
export class EducationItemComponent {
  readonly border = input.required<boolean>();
  readonly education = input.required<EducationItemModel>();
}
