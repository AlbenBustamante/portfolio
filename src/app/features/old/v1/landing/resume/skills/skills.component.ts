import { Component } from '@angular/core';
import { SkillsData } from './skills.data';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillService } from '@features/old/v1/core/services/skill.service';
import { ResumeSectionComponent } from '../components/resume-section/resume-section.component';

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
