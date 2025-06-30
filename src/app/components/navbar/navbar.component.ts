import { Component, Input, WritableSignal } from '@angular/core';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { CloseMenuIconComponent } from '../close-menu-icon/close-menu-icon.component';
import { NgClass } from '@angular/common';
import { OpenMenuIconComponent } from '../open-menu-icon/open-menu-icon.component';
import { GlobeIconComponent } from '../globe-icon/globe-icon.component';
import { MoonIconComponent } from '../moon-icon/moon-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarItemComponent,
    CloseMenuIconComponent,
    OpenMenuIconComponent,
    GlobeIconComponent,
    MoonIconComponent,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input({ required: true }) show!: WritableSignal<boolean>;

  toggleShowNavBar() {
    this.show.update((prevValue) => !prevValue);
  }
}
