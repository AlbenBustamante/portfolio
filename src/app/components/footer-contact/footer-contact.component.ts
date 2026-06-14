import { Component, inject } from '@angular/core';
import { FooterContactLinkComponent } from '@components/footer-contact-link/footer-contact-link.component';
import { SocialMediaService } from '@core/services/social-media.service';

@Component({
  selector: 'app-footer-contact',
  imports: [FooterContactLinkComponent],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.css',
})
export class FooterContactComponent {
  private readonly _socialMediaService = inject(SocialMediaService);

  get email() {
    return this._socialMediaService.email;
  }

  get whatsApp() {
    return this._socialMediaService.whatsApp;
  }
}
