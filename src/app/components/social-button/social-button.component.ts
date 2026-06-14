import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { SocialMediaModel } from '@core/models/social-media.model';

@Component({
  selector: 'app-social-button',
  imports: [NgClass],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  readonly socialMedia = input.required<SocialMediaModel>();
  readonly axis = input<'x' | 'y'>('x');

  get url() {
    return this.socialMedia().url;
  }

  get socialName() {
    return this.socialMedia().socialName;
  }

  get displayName() {
    return this.socialMedia().displayName;
  }
}
