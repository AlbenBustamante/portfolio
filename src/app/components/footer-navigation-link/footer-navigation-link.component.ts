import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-navigation-link',
  imports: [RouterLink],
  templateUrl: './footer-navigation-link.component.html',
  styleUrl: './footer-navigation-link.component.css',
})
export class FooterNavigationLinkComponent {
  readonly route = input.required<string>();
  readonly headline = input.required<string>();
}
