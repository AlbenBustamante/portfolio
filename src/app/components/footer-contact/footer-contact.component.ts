import { Component } from '@angular/core';
import { FooterContactLinkComponent } from '@components/footer-contact-link/footer-contact-link.component';

@Component({
  selector: 'app-footer-contact',
  imports: [FooterContactLinkComponent],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.css',
})
export class FooterContactComponent {}
