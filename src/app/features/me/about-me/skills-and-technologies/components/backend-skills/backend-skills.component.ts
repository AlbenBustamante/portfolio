import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { JavaIconComponent } from '../icons/java-icon/java-icon.component';
import { SkillComponent } from '../skill/skill.component';
import { SqlIconComponent } from '../icons/sql-icon/sql-icon.component';
import { SpringBootIconComponent } from '../icons/spring-boot-icon/spring-boot-icon.component';

@Component({
  selector: 'app-backend-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    JavaIconComponent,
    SqlIconComponent,
    SpringBootIconComponent,
  ],
  templateUrl: './backend-skills.component.html',
  styleUrl: './backend-skills.component.css',
})
export class BackendSkillsComponent {}
