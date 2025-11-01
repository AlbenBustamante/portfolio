import { Component, input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { SourceCodeButtonComponent } from '../source-code-button/source-code-button.component';
import { ProjectDetailModel } from '../../../../../../core/models/project-detail.model';

@Component({
  selector: 'app-header',
  imports: [TitleComponent, OpenLiveDemoComponent, SourceCodeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly project = input.required<ProjectDetailModel | null>();
}
