import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SkillsAndTechnologies } from './skills-and-technologies/skills-and-technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-about-me',
  imports: [
    HeaderComponent,
    SkillsAndTechnologies,
    ExperienceComponent,
    EducationComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export default class AboutMeComponent {}
