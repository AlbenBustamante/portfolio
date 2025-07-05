import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-social-media-button',
  imports: [],
  templateUrl: './sidebar-social-media-button.component.html',
  styleUrl: './sidebar-social-media-button.component.css',
})
export class SidebarSocialMediaButtonComponent {
  @Input({ required: true }) text!: string;
}
