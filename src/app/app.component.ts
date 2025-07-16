import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, AccessibilityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
