import { Component } from '@angular/core';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';

@Component({
  selector: 'app-source-code-button',
  imports: [GithubIconComponent],
  templateUrl: './source-code-button.component.html',
  styleUrl: './source-code-button.component.css',
})
export class SourceCodeButtonComponent {}
