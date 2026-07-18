import { Component, input } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { AboutMeData } from '../../about-me.model';

@Component({
  selector: 'app-header',
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly aboutMe = input.required<AboutMeData>();
}
