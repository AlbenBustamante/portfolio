import { Component } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills-and-technologies',
  imports: [SubtitleComponent, SkillCardComponent],
  templateUrl: './skills-and-technologies.component.html',
  styleUrl: './skills-and-technologies.component.css',
})
export class SkillsAndTechnologies {}
