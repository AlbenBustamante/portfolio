import { Component } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { BulletContentComponent } from '../components/bullet-content/bullet-content.component';

@Component({
  selector: 'app-education',
  imports: [SubtitleComponent, BulletContentComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {}
