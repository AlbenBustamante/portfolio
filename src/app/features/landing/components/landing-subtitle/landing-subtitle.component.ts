import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-subtitle',
  imports: [],
  templateUrl: './landing-subtitle.component.html',
  styleUrl: './landing-subtitle.component.css',
})
export class LandingSubtitleComponent {
  @Input({ required: true }) headline!: string;
}
