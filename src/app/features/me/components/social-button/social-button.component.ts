import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  imports: [NgClass],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  readonly url = input.required<string>();
  readonly socialName = input.required<string>();
  readonly displayName = input<string>('');
  readonly axis = input<'x' | 'y'>('x');
}
