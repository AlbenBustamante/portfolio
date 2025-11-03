import { Component, HostListener, signal } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from '@components/title/title.component';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { HireMeCardComponent } from './components/hire-me-card/hire-me-card.component';
import { ContainerComponent } from '@components/container/container.component';

@Component({
  selector: 'app-hire-me',
  imports: [
    FormComponent,
    TitleComponent,
    SocialMediaComponent,
    HireMeCardComponent,
    ContainerComponent,
  ],
  templateUrl: './hire-me.component.html',
  styleUrl: './hire-me.component.css',
})
export default class HireMeComponent {
  readonly socialMediaAxis = signal<'x' | 'y'>('x');

  ngAfterViewInit() {
    this._resizeSocialMediaContainer();
  }

  @HostListener('window:resize')
  onResize() {
    this._resizeSocialMediaContainer();
  }

  private _resizeSocialMediaContainer() {
    const width = window.innerWidth;

    if (width >= 1024) {
      return this.socialMediaAxis.set('y');
    }

    this.socialMediaAxis.set('x');
  }
}
