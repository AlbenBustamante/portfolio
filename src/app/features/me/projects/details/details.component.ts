import { Component, inject, input } from '@angular/core';
import { Store } from './store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [JsonPipe],
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
