import { Component, computed, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { SkillsData } from '../../skills.data';

@Component({
  selector: 'app-skill-card',
  imports: [TranslatePipe, SkillItemComponent],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input({ required: true }) category!: string;
  readonly skills;

  constructor(private readonly _skillsData: SkillsData) {
    this.skills = computed(() =>
      this._skillsData
        .skills()
        .filter((skill) => skill.category === this.category)
    );
  }

  get value() {
    return `landing.resume.skills.${this.category}`;
  }
}
