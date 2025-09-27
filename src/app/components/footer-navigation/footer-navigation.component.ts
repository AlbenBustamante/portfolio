import { Component } from '@angular/core';
import { FooterNavigationLinkComponent } from '@components/footer-navigation-link/footer-navigation-link.component';

@Component({
  selector: 'app-footer-navigation',
  imports: [FooterNavigationLinkComponent],
  templateUrl: './footer-navigation.component.html',
  styleUrl: './footer-navigation.component.css',
})
export class FooterNavigationComponent {}
