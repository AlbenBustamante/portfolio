import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-social-media-button',
  imports: [TranslatePipe],
  templateUrl: './sidebar-social-media-button.component.html',
  styleUrl: './sidebar-social-media-button.component.css',
})
export class SidebarSocialMediaButtonComponent {
  @Input({ required: true }) socialMedia!: string;

  get value() {
    return `landing.socialMedia.${this.socialMedia}.value`;
  }

  get socialName() {
    return `landing.socialMedia.${this.socialMedia}.name`;
  }

  get url() {
    return `landing.socialMedia.${this.socialMedia}.url`;
  }
}
