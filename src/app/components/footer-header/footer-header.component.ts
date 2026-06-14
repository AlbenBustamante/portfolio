import { Component, inject } from '@angular/core';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';
import { FooterSocialLinkComponent } from '@components/footer-social-link/footer-social-link.component';
import { LinkedinIconComponent } from '@components/icons/linkedin-icon/linkedin-icon.component';
import { DiscordIconComponent } from '@components/icons/discord-icon/discord-icon.component';
import { SocialMediaService } from '@core/services/social-media.service';

@Component({
  selector: 'app-footer-header',
  imports: [
    GithubIconComponent,
    FooterSocialLinkComponent,
    LinkedinIconComponent,
    DiscordIconComponent,
  ],
  templateUrl: './footer-header.component.html',
  styleUrl: './footer-header.component.css',
})
export class FooterHeaderComponent {
  private readonly _socialMediaService = inject(SocialMediaService);

  get github() {
    return this._socialMediaService.github;
  }

  get linkedIn() {
    return this._socialMediaService.linkedIn;
  }

  get discord() {
    return this._socialMediaService.discord;
  }
}
