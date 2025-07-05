import { Component } from '@angular/core';
import { LandingTitleComponent } from '../components/landing-title/landing-title.component';
import { LandingSubtitleComponent } from '../components/landing-subtitle/landing-subtitle.component';

@Component({
  selector: 'app-resume',
  imports: [LandingTitleComponent, LandingSubtitleComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
