import { Component, Input } from '@angular/core';
import { Experience } from '@features/old/v1/core/models/experience.model';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
})
export class ExperienceItemComponent {
  @Input({ required: true }) experience!: Experience;
}
