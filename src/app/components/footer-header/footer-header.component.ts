import { Component } from '@angular/core';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';
import { FooterSocialLinkComponent } from '@components/footer-social-link/footer-social-link.component';
import { LinkedinIconComponent } from '@components/icons/linkedin-icon/linkedin-icon.component';
import { DiscordIconComponent } from '@components/icons/discord-icon/discord-icon.component';

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
export class FooterHeaderComponent {}
