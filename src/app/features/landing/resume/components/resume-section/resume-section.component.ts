import { Component, Input } from '@angular/core';
import { LandingSubtitleComponent } from '../../../components/landing-subtitle/landing-subtitle.component';

@Component({
  selector: 'app-resume-section',
  imports: [LandingSubtitleComponent],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.css',
})
export class ResumeSectionComponent {
  @Input({ required: true }) headline!: string;
}
