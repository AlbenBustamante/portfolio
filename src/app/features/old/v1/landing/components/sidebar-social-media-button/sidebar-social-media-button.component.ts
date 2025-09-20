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
    return `old.v1.landing.socialMedia.${this.socialMedia}.value`;
  }

  get socialName() {
    return `old.v1.landing.socialMedia.${this.socialMedia}.name`;
  }

  get url() {
    return `old.v1.landing.socialMedia.${this.socialMedia}.url`;
  }
}
