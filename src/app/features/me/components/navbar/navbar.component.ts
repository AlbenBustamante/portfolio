import { Component } from '@angular/core';
import { MenuIconComponent } from '../icons/menu-icon/menu-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [MenuIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
