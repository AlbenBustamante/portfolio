import { Component, input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';

@Component({
  selector: 'app-hire-me-card',
  imports: [CardComponent, SubtitleComponent],
  templateUrl: './hire-me-card.component.html',
  styleUrl: './hire-me-card.component.css',
})
export class HireMeCardComponent {
  readonly headline = input.required<string>();
}
