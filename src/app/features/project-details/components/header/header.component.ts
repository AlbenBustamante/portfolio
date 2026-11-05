import { Component, inject, input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { SourceCodeButtonComponent } from '../source-code-button/source-code-button.component';
import { ProjectDetailItemModel } from '@core/models/project-detail.model';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProjectDetailsStore } from '@features/project-details/project-details.store';

@Component({
  selector: 'app-header',
  imports: [
    TitleComponent,
    OpenLiveDemoComponent,
    SourceCodeButtonComponent,
    HeaderSectionComponent,
    CarouselComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly store = inject(ProjectDetailsStore);
  readonly project = input.required<ProjectDetailItemModel | null>();
  readonly gallery = input.required<string[]>();
}
