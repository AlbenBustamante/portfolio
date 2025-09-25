import { Component } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { BackendSkillsComponent } from './components/backend-skills/backend-skills.component';
import { FrontendSkillsComponent } from './components/frontend-skills/frontend-skills.component';
import { MobileSkillsComponent } from './components/mobile-skills/mobile-skills.component';
import { ToolsSkillsComponent } from './components/tools-skills/tools-skills.component';

@Component({
  selector: 'app-skills-and-technologies',
  imports: [
    SubtitleComponent,
    BackendSkillsComponent,
    FrontendSkillsComponent,
    MobileSkillsComponent,
    ToolsSkillsComponent,
  ],
  templateUrl: './skills-and-technologies.component.html',
  styleUrl: './skills-and-technologies.component.css',
})
export class SkillsAndTechnologies {}
