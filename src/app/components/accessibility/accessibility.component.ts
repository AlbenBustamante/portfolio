import { Component, signal } from '@angular/core';
import { MoonIconComponent } from '../icons/moon-icon/moon-icon.component';
import { GlobeIconComponent } from '../icons/globe-icon/globe-icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-accessibility',
  imports: [MoonIconComponent, GlobeIconComponent, NgClass],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent {
  readonly showLanguages = signal<boolean>(false);

  toggleShowLanguages() {
    this.showLanguages.update((show) => !show);
  }
}
