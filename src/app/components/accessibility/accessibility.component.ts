import { Component } from '@angular/core';
import { MoonIconComponent } from '../icons/moon-icon/moon-icon.component';
import { GlobeIconComponent } from '../icons/globe-icon/globe-icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-accessibility',
  imports: [MoonIconComponent, GlobeIconComponent, ButtonComponent],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent {}
