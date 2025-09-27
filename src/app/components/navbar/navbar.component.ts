import { Component, HostListener, signal } from '@angular/core';
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
  readonly adjust = signal<boolean>(false);
  readonly showNavbar = signal<boolean>(false);

  ngOnInit() {
    this._setAdjust();
  }

  @HostListener('window:scroll')
  onScroll() {
    this._setAdjust();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.adjust.set(false);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._setAdjust();
  }

  private _setAdjust() {
    const scrollY = window.scrollY;
    this.adjust.set(scrollY > 80);
  }
}
