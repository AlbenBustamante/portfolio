import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() color: 'primary' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';

  private mapColor() {
    return {
      primary: {
        'bg-primary-600': true,
        'text-primary-50': true,
        'hover:bg-primary-700': true,
        'focus:ring-primary-300': true,
        'active:bg-primary-800': true,
      },
    };
  }

  get getColor() {
    return this.mapColor()[this.color];
  }
}
