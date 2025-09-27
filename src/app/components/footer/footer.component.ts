import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIconComponent } from '@components/icons/github-icon/github-icon.component';
import { FooterSocialLinkComponent } from '@components/footer-social-link/footer-social-link.component';
import { LinkedinIconComponent } from '@components/icons/linkedin-icon/linkedin-icon.component';
import { DiscordIconComponent } from '@components/icons/discord-icon/discord-icon.component';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    GithubIconComponent,
    FooterSocialLinkComponent,
    LinkedinIconComponent,
    DiscordIconComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
