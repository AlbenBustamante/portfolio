import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-subtitle',
  imports: [TranslatePipe],
  templateUrl: './landing-subtitle.component.html',
  styleUrl: './landing-subtitle.component.css',
})
export class LandingSubtitleComponent {
  @Input({ required: true }) headline!: string;

  get value() {
    return `landing.${this.headline}`;
  }
}
