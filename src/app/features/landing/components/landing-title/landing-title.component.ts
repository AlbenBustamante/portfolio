import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-title',
  imports: [TranslatePipe],
  templateUrl: './landing-title.component.html',
  styleUrl: './landing-title.component.css',
})
export class LandingTitleComponent {
  @Input({ required: true }) headline!: string;

  get value() {
    return `landing.${this.headline}.title`;
  }
}
