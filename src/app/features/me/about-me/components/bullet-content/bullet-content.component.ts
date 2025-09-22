import { Component, input } from '@angular/core';
import { BulletComponent } from '../bullet/bullet.component';

@Component({
  selector: 'app-bullet-content',
  imports: [BulletComponent],
  templateUrl: './bullet-content.component.html',
  styleUrl: './bullet-content.component.css',
})
export class BulletContentComponent {
  readonly headline = input.required<string>();
  readonly keypoints = input.required<string[]>();
}
