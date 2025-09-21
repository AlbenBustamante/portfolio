import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-about-me',
  imports: [HeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export default class AboutMeComponent {}
