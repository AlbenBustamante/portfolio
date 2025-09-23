import { Component } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-skills-and-technologies',
  imports: [SubtitleComponent, SkillComponent],
  templateUrl: './skills-and-technologies.component.html',
  styleUrl: './skills-and-technologies.component.css',
})
export class SkillsAndTechnologies {}
