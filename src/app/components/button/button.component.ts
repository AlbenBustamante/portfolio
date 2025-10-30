import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  readonly onClick = output<void>();

  readonly label = input.required<string>();
  readonly type = input<'button' | 'submit'>('button');
  readonly color = input<'primary' | 'accent'>('primary');
  readonly variant = input<'normal' | 'outlined'>('normal');
  readonly disabled = input<boolean>(false);
  readonly fluid = input<boolean>(false);
  readonly rounded = input<'2xl' | '3xl'>('2xl');

  private _designMap() {
    return {
      normal: {
        primary:
          'text-white bg-primary-700 hover:ring-2 hover:ring-primary-600 hover:shadow-[0_0_10px_2px_var(--color-primary-800)] hover:shadow-primary-700 hover:scale-[1.02] active:bg-primary-800 active:shadow-primary-800 active:ring-primary-700 transition-[box-shadow,scale,background-color] duration-500',
        accent:
          'text-white bg-accent-700 hover:ring-2 hover:ring-accent-600 hover:shadow-[0_0_10px_2px_var(--color-accent-800)] hover:shadow-accent-700 hover:scale-[1.02] active:bg-accent-800 active:shadow-accent-800 active:ring-accent-700 transition-[box-shadow,scale,background-color] duration-500',
      },
      outlined: {
        primary:
          'text-primary-300 ring-4 ring-primary-700 hover:text-primary-50 hover:bg-primary-700 active:ring-primary-800 active:bg-primary-800 focus:inset-ring-2 focus:inset-ring-primary-700 disabled:bg-primary-900 disabled:ring-0',
        accent:
          'text-accent-50 ring-4 ring-accent-700 hover:text-accent-50 hover:bg-accent-700 active:ring-accent-800 active:bg-accent-800 focus:inset-ring-2 focus:inset-ring-accent-700 disabled:bg-primary-900 disabled:ring-0',
      },
    };
  }

  private _mapFluid() {
    return this.fluid() ? 'w-full' : '';
  }

  private _mapRounded() {
    return `rounded-${this.rounded()}`;
  }

  get design() {
    const c = this._designMap()[this.variant()][this.color()];
    const f = this._mapFluid();
    const r = this._mapRounded();

    return `${c} ${f} ${r}`;
  }
}
