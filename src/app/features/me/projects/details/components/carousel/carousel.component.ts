import { Component, inject } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  readonly store = inject(Store);
}
