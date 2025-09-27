import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-social-link',
  imports: [],
  templateUrl: './footer-social-link.component.html',
  styleUrl: './footer-social-link.component.css',
})
export class FooterSocialLinkComponent {
  readonly url = input.required<string>();
}
