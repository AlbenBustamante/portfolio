import { Component } from '@angular/core';
import { MoonIconComponent } from '../moon-icon/moon-icon.component';
import { GlobeIconComponent } from '../globe-icon/globe-icon.component';

@Component({
  selector: 'app-accessibility',
  imports: [MoonIconComponent, GlobeIconComponent],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent {}
