import { Component } from '@angular/core';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { SidebarSocialMediaButtonComponent } from '../sidebar-social-media-button/sidebar-social-media-button.component';
import { LinkedinIconComponent } from '../icons/linkedin-icon/linkedin-icon.component';
import { EmailIconComponent } from '../icons/email-icon/email-icon.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    GithubIconComponent,
    LinkedinIconComponent,
    EmailIconComponent,
    SidebarSocialMediaButtonComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
