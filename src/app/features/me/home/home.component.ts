import { Component } from '@angular/core';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { DividerComponent } from '@components/divider/divider.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ContainerComponent } from '@components/container/container.component';

@Component({
  selector: 'app-home',
  imports: [
    SocialMediaComponent,
    DividerComponent,
    HeaderComponent,
    ActionsComponent,
    ContainerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
