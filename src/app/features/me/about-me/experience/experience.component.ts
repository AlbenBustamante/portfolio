import { Component } from '@angular/core';
import { SubtitleComponent } from '@features/me/components/subtitle/subtitle.component';
import { BulletContentComponent } from '../components/bullet-content/bullet-content.component';

@Component({
  selector: 'app-experience',
  imports: [SubtitleComponent, BulletContentComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {}
