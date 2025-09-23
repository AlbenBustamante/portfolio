import { Component } from '@angular/core';
import { SocialMediaComponent } from '@components/social-media/social-media.component';

@Component({
  selector: 'app-home',
  imports: [SocialMediaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
