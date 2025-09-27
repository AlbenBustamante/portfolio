import { Component, input } from '@angular/core';

@Component({
  selector: 'app-open-live-demo',
  imports: [],
  templateUrl: './open-live-demo.component.html',
  styleUrl: './open-live-demo.component.css',
})
export class OpenLiveDemoComponent {
  readonly url = input.required<string>();
}
