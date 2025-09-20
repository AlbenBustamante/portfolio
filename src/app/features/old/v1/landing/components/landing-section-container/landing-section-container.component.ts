import { Component, Input } from '@angular/core';
import { LandingTitleComponent } from '../landing-title/landing-title.component';

@Component({
  selector: 'app-landing-section-container',
  imports: [LandingTitleComponent],
  templateUrl: './landing-section-container.component.html',
  styleUrl: './landing-section-container.component.css',
})
export class LandingSectionContainerComponent {
  @Input({ required: true }) headline!: string;
}
