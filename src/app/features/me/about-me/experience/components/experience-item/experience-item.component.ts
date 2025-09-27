import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { BulletContentComponent } from '@features/me/about-me/components/bullet-content/bullet-content.component';

@Component({
  selector: 'app-experience-item',
  imports: [BulletContentComponent],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
})
export class ExperienceItemComponent {
  readonly experience = input.required<Experience>();
}
