import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly showNavBar = signal<boolean>(false);
}
