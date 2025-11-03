import { Component, inject, input } from '@angular/core';
import { Store } from './store';
import { ContainerComponent } from '@components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { RightArrowIconComponent } from '../components/right-arrow-icon/right-arrow-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [
    ContainerComponent,
    HeaderComponent,
    RightArrowIconComponent,
    RouterLink,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [Store],
})
export default class DetailsComponent {
  readonly id = input.required<string>();
  readonly store = inject(Store);

  ngOnInit() {
    this.store.fetch(this.id());
  }
}
