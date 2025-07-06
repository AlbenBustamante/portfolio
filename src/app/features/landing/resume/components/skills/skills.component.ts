import { Component } from '@angular/core';
import { LandingSubtitleComponent } from '../../../components/landing-subtitle/landing-subtitle.component';
import { TsIconComponent } from '../../icons/ts-icon/ts-icon.component';
import { JavaIconComponent } from '../../icons/java-icon/java-icon.component';
import { JsIconComponent } from '../../icons/js-icon/js-icon.component';
import { HtmlIconComponent } from '../../icons/html-icon/html-icon.component';
import { CssIconComponent } from '../../icons/css-icon/css-icon.component';
import { TailwindIconComponent } from '../../icons/tailwind-icon/tailwind-icon.component';
import { AngularIconComponent } from '../../icons/angular-icon/angular-icon.component';
import { SpringIconComponent } from '../../icons/spring-icon/spring-icon.component';
import { SqlIconComponent } from '../../icons/sql-icon/sql-icon.component';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [
    LandingSubtitleComponent,
    TsIconComponent,
    JavaIconComponent,
    JsIconComponent,
    HtmlIconComponent,
    CssIconComponent,
    TailwindIconComponent,
    AngularIconComponent,
    SpringIconComponent,
    SqlIconComponent,
    SkillCardComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
