import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-item',
  imports: [TranslatePipe],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
})
export class NavbarItemComponent {
  @Input({ required: true }) headline!: string;
  @Input({ required: true }) route!: string;

  get routePath() {
    return `old/v1${this.route}`;
  }
}
