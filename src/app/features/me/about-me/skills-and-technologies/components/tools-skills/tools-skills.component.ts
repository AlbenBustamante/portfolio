import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillComponent } from '../skill/skill.component';
import { GitIconComponent } from '../icons/git-icon/git-icon.component';
import { DockerIconComponent } from '../icons/docker-icon/docker-icon.component';
import { IntellijIconComponent } from '../icons/intellij-icon/intellij-icon.component';
import { AndroidStudioIconComponent } from '../icons/android-studio-icon/android-studio-icon.component';
import { VSCodeIconComponent } from '../icons/vscode-icon/vscode-icon.component';
import { NPMIconComponent } from '../icons/npm-icon/npm-icon.component';
import { PNPMIconComponent } from '../icons/pnpm-icon/pnpm-icon.component';
import { MavenIconComponent } from '../icons/maven-icon/maven-icon.component';
import { GradleIconComponent } from '../icons/gradle-icon/gradle-icon.component';

@Component({
  selector: 'app-tools-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    GitIconComponent,
    DockerIconComponent,
    IntellijIconComponent,
    AndroidStudioIconComponent,
    VSCodeIconComponent,
    NPMIconComponent,
    PNPMIconComponent,
    MavenIconComponent,
    GradleIconComponent,
  ],
  templateUrl: './tools-skills.component.html',
  styleUrl: './tools-skills.component.css',
})
export class ToolsSkillsComponent {}
