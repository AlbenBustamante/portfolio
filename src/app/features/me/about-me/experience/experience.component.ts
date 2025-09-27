import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { ExperienceStore } from './experience.store';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';

@Component({
  selector: 'app-experience',
  imports: [SubtitleComponent, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  providers: [ExperienceStore],
})
export class ExperienceComponent {
  readonly store = inject(ExperienceStore);

  constructor() {
    this.store.fetchAll();
  }
}
