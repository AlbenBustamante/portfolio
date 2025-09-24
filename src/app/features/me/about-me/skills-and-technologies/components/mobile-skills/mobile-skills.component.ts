import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillComponent } from '../skill/skill.component';
import { DartIconComponent } from '../icons/dart-icon/dart-icon.component';
import { FlutterIconComponent } from '../icons/flutter-icon/flutter-icon.component';

@Component({
  selector: 'app-mobile-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    DartIconComponent,
    FlutterIconComponent,
  ],
  templateUrl: './mobile-skills.component.html',
  styleUrl: './mobile-skills.component.css',
})
export class MobileSkillsComponent {}
