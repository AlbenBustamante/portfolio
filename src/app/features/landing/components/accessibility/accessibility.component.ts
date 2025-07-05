import { Component } from '@angular/core';
import { MoonIconComponent } from '../../../../components/icons/moon-icon/moon-icon.component';
import { GlobeIconComponent } from '../../../../components/icons/globe-icon/globe-icon.component';

@Component({
  selector: 'app-accessibility',
  imports: [MoonIconComponent, GlobeIconComponent],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.css',
})
export class AccessibilityComponent {}
