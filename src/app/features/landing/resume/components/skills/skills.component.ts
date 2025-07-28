import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';
import { SkillService } from '../../../../../core/services/skill.service';
import { SkillsData } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [ResumeSectionComponent, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly skills;

  constructor(
    private readonly _skillsData: SkillsData,
    private readonly _skillService: SkillService
  ) {
    this.skills = this._skillsData.skills;
  }

  ngOnInit() {
    this.skills.set(this._skillService.getSkills());
  }
}
