import { Component } from '@angular/core';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { CardComponent } from '@components/card/card.component';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';

@Component({
  selector: 'app-project',
  imports: [OpenLiveDemoComponent, CardComponent, GithubIconComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  readonly skills = ['Java', 'Spring Boot', 'Angular'];
}
