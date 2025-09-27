import { Component, input } from '@angular/core';
import { BulletComponent } from '../bullet/bullet.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bullet-content',
  imports: [BulletComponent, NgClass],
  templateUrl: './bullet-content.component.html',
  styleUrl: './bullet-content.component.css',
})
export class BulletContentComponent {
  readonly bulletBorder = input.required<boolean>();
  readonly container = input.required<'bullet' | 'border'>();
  readonly headline = input.required<string>();
  readonly subheadline = input<string>();
  readonly year = input<string>();
  readonly keypoints = input<string[]>();
}
