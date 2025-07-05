import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import HomeComponent from './features/home/home.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
