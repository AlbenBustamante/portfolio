import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-me',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export default class MeComponent {}
