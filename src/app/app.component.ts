import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import HomeComponent from './features/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
