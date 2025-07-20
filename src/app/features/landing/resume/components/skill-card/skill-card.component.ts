import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-card',
  imports: [TranslatePipe],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input({ required: true }) headline!: string;

  get value() {
    return `landing.resume.skills.${this.headline}`;
  }
}
