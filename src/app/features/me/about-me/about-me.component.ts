import { Component } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-about-me',
  imports: [TitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export default class AboutMeComponent {}
