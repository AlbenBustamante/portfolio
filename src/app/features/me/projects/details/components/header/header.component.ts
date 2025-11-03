import { Component, input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';
import { SourceCodeButtonComponent } from '../source-code-button/source-code-button.component';
import { ProjectDetailModel } from '@core/models/project-detail.model';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { CarouselComponent } from '../carousel/carousel.component';

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
  readonly project = input.required<ProjectDetailModel | null>();
  readonly gallery = input.required<string[]>();
}
