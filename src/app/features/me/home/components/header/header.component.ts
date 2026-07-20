import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly greeting = input.required<string | undefined>();
  readonly occupation = input.required<string | undefined>();
}
