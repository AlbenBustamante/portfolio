import { Component } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { BackendSkillsComponent } from './components/backend-skills/backend-skills.component';

@Component({
  selector: 'app-skills-and-technologies',
  imports: [SubtitleComponent, SkillCardComponent, BackendSkillsComponent],
  templateUrl: './skills-and-technologies.component.html',
  styleUrl: './skills-and-technologies.component.css',
})
export class SkillsAndTechnologies {}
