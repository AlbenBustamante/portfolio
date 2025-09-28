import { Component, input } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';

@Component({
  selector: 'app-header',
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly description = input.required<string[]>();
}
