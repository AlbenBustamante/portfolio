import { Component, signal } from '@angular/core';
import { MenuIconComponent } from '../icons/menu-icon/menu-icon.component';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { NgClass } from '@angular/common';
import { CloseMenuIconComponent } from '../icons/close-menu-icon/close-menu-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MenuIconComponent,
    CloseMenuIconComponent,
    NavbarItemComponent,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly showNavbar = signal<boolean>(false);
}
