import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillComponent } from '../skill/skill.component';
import { HTMLIconComponent } from '../icons/html-icon/html-icon.component';
import { CSSIconComponent } from '../icons/css-icon/css-icon.component';
import { JSIconComponent } from '../icons/js-icon/js-icon.component';
import { TSIconComponent } from '../icons/ts-icon/ts-icon.component';
import { AngularIconComponent } from '../icons/angular-icon/angular-icon.component';
import { TailwindIconComponent } from '../icons/tailwind-icon/tailwind-icon.component';
import { BootstrapIconComponent } from '../icons/bootstrap-icon/bootstrap-icon.component';

@Component({
  selector: 'app-frontend-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    HTMLIconComponent,
    CSSIconComponent,
    TSIconComponent,
    JSIconComponent,
    AngularIconComponent,
    TailwindIconComponent,
    BootstrapIconComponent,
  ],
  templateUrl: './frontend-skills.component.html',
  styleUrl: './frontend-skills.component.css',
})
export class FrontendSkillsComponent {}
