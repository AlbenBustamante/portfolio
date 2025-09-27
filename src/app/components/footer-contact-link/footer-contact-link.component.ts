import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-contact-link',
  imports: [],
  templateUrl: './footer-contact-link.component.html',
  styleUrl: './footer-contact-link.component.css',
})
export class FooterContactLinkComponent {
  readonly url = input.required<string>();
  readonly headline = input.required<string>();
}
