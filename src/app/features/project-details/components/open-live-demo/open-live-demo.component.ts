import { Component, inject, input } from '@angular/core';
import { ProjectDetailsStore } from '@features/project-details/project-details.store';

@Component({
  selector: 'app-open-live-demo',
  imports: [],
  templateUrl: './open-live-demo.component.html',
  styleUrl: './open-live-demo.component.css',
})
export class OpenLiveDemoComponent {
  readonly store = inject(ProjectDetailsStore);
  readonly url = input.required<string | undefined>();
}
