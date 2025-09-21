import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent {
  readonly onClick = output<void>();
  readonly text = input.required<string>();
  readonly route = input.required<string>();
}
