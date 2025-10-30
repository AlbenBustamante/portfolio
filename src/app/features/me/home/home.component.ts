import { Component } from '@angular/core';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { DividerComponent } from '@components/divider/divider.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [
    SocialMediaComponent,
    DividerComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
