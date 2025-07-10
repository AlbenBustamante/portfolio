import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillItemComponent } from '../skill-item/skill-item.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';

@Component({
  selector: 'app-skills',
  imports: [ResumeSectionComponent, SkillCardComponent, SkillItemComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
