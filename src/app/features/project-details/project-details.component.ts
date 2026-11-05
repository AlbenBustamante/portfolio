import { Component, inject, input } from '@angular/core';
import { ProjectDetailsStore } from './project-details.store';
import { ContainerComponent } from '@components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { RightArrowIconComponent } from '@components/right-arrow-icon/right-arrow-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [
    ContainerComponent,
    HeaderComponent,
    RightArrowIconComponent,
    RouterLink,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
  providers: [ProjectDetailsStore],
})
export default class DetailsComponent {
  readonly id = input.required<string>();
  readonly store = inject(ProjectDetailsStore);

  ngOnInit() {
    this.store.fetch(this.id());
  }
}
