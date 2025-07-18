import { Component } from '@angular/core';
//import { AccessibilityComponent } from '../../components/accessibility/accessibility.component';
import { EmailIconComponent } from '../../../../components/icons/email-icon/email-icon.component';
import { GithubIconComponent } from '../../../../components/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../../../../components/icons/linkedin-icon/linkedin-icon.component';
import { PhoneIconComponent } from '../../../../components/icons/phone-icon/phone-icon.component';
import { SidebarSocialMediaButtonComponent } from '../sidebar-social-media-button/sidebar-social-media-button.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [
    TranslatePipe,
    GithubIconComponent,
    LinkedinIconComponent,
    EmailIconComponent,
    SidebarSocialMediaButtonComponent,
    PhoneIconComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
