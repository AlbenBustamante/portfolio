import { Component, inject, input } from '@angular/core';
import { Store } from './store';
import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { OpenLiveDemoComponent } from './components/open-live-demo/open-live-demo.component';
import { SourceCodeButtonComponent } from './components/source-code-button/source-code-button.component';

@Component({
  selector: 'app-details',
  imports: [
    ContainerComponent,
    TitleComponent,
    OpenLiveDemoComponent,
    SourceCodeButtonComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [Store],
})
export default class DetailsComponent {
  readonly id = input.required<string>();
  readonly store = inject(Store);

  ngOnInit() {
    this.store.fetch(this.id());
  }
}
