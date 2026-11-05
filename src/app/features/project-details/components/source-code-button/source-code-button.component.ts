import { Component, inject, input } from '@angular/core';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';
import { ProjectDetailsStore } from '@features/project-details/project-details.store';

@Component({
  selector: 'app-source-code-button',
  imports: [GithubIconComponent],
  templateUrl: './source-code-button.component.html',
  styleUrl: './source-code-button.component.css',
})
export class SourceCodeButtonComponent {
  readonly store = inject(ProjectDetailsStore);
  readonly url = input.required<string | undefined>();
}
