import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-social-media-button',
  imports: [TranslatePipe],
  templateUrl: './sidebar-social-media-button.component.html',
  styleUrl: './sidebar-social-media-button.component.css',
})
export class SidebarSocialMediaButtonComponent {
  @Input({ required: true }) value!: string;
  @Input({ required: true }) socialName!: string;
  @Input({ required: true }) url!: string;
}
