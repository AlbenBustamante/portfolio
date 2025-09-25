import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  readonly padding = input<'sm' | 'base'>('base');
}
