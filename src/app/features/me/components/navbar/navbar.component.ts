import { Component } from '@angular/core';
import { MenuIconComponent } from '../icons/menu-icon/menu-icon.component';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  imports: [MenuIconComponent, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
