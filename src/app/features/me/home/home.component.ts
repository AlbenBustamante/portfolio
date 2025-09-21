import { Component } from '@angular/core';
import { SocialButtonComponent } from '../components/social-button/social-button.component';
import { GithubIconComponent } from '../components/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../components/icons/linkedin-icon/linkedin-icon.component';
import { WhatsappIconComponent } from '../components/icons/whatsapp-icon/whatsapp-icon.component';
import { MailIconComponent } from '../components/icons/mail-icon/mail-icon.component';
import { DiscordIconComponent } from '../components/icons/discord-icon/discord-icon.component';

@Component({
  selector: 'app-home',
  imports: [
    SocialButtonComponent,
    GithubIconComponent,
    LinkedinIconComponent,
    WhatsappIconComponent,
    MailIconComponent,
    DiscordIconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
