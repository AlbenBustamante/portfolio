import { Component } from '@angular/core';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  imports: [NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
