import { Component, input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skill-card',
  imports: [CardComponent, SkillComponent],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  readonly headline = input.required<string>();
  readonly skills = input.required<string[]>();
}
