import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityComponent } from '@features/old/v1/components/accessibility/accessibility.component';
import { NavbarComponent } from '@features/old/v1/components/navbar/navbar.component';

@Component({
  selector: 'app-v1',
  imports: [NavbarComponent, RouterOutlet, AccessibilityComponent],
  templateUrl: './v1.component.html',
  styleUrl: './v1.component.css',
})
export default class V1Component {
  readonly darkMode = signal<boolean>(false);

  @HostBinding('class.dark')
  get mode() {
    return this.darkMode();
  }
}
