import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from '../components/title/title.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';
import { SubtitleComponent } from '../components/subtitle/subtitle.component';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-hire-me',
  imports: [
    FormComponent,
    TitleComponent,
    SocialMediaComponent,
    SubtitleComponent,
    CardComponent,
  ],
  templateUrl: './hire-me.component.html',
  styleUrl: './hire-me.component.css',
})
export default class HireMeComponent {}
