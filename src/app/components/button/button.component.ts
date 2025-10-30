import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly type = input<'button' | 'submit'>('button');
  readonly color = input<'primary' | 'accent'>('primary');
  readonly variant = input<'normal' | 'outlined'>('normal');

  private _designMap() {
    return {
      normal: {
        primary:
          'text-white bg-primary-700 hover:bg-primary-800 active:bg-primary-800 disabled:bg-primary-900 hover:text-primary-50 focus:ring-4 focus:ring-primary-500 focus:hover:ring-primary-600 focus:active:ring-primary-700',
        accent:
          'text-white bg-accent-700 hover:bg-accent-800 active:bg-accent-800 disabled:bg-accent-900 hover:text-accent-50 focus:ring-4 focus:ring-accent-600 focus:hover:ring-accent-700 focus:active:ring-accent-800',
      },
      outlined: {
        primary:
          'text-primary-300 ring-4 ring-primary-700 hover:text-primary-50 hover:bg-primary-700 active:ring-primary-800 active:bg-primary-800 focus:inset-ring-2 focus:inset-ring-primary-700',
        accent:
          'text-accent-50 ring-4 ring-accent-700 hover:text-accent-50 hover:bg-accent-700 active:ring-accent-800 active:bg-accent-800 focus:inset-ring-2 focus:inset-ring-accent-700',
      },
    };
  }

  get design() {
    return this._designMap()[this.variant()][this.color()];
  }
}
