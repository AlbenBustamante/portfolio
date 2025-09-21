import { Component } from '@angular/core';
import { DiscordIconComponent } from '../icons/discord-icon/discord-icon.component';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../icons/linkedin-icon/linkedin-icon.component';
import { MailIconComponent } from '../icons/mail-icon/mail-icon.component';
import { WhatsappIconComponent } from '../icons/whatsapp-icon/whatsapp-icon.component';
import { SocialButtonComponent } from '../social-button/social-button.component';

@Component({
  selector: 'app-social-media',
  imports: [
    SocialButtonComponent,
    GithubIconComponent,
    LinkedinIconComponent,
    WhatsappIconComponent,
    MailIconComponent,
    DiscordIconComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {}
