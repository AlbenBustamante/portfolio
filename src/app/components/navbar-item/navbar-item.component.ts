import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent {
  @Input({ required: true }) headline!: string;
}
