import { Component, inject } from '@angular/core';
import { FooterContactLinkComponent } from '@components/footer-contact-link/footer-contact-link.component';
import { SocialMediaService } from '@core/services/social-media.service';
import { AppStore } from 'app/app.store';

@Component({
  selector: 'app-footer-contact',
  imports: [FooterContactLinkComponent],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.css',
})
export class FooterContactComponent {
  private readonly _socialMediaService = inject(SocialMediaService);

  readonly store = inject(AppStore);

  get email() {
    return this._socialMediaService.email;
  }

  get whatsApp() {
    return this._socialMediaService.whatsApp;
  }
}
