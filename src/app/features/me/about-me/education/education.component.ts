import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { EducationStore } from './education.store';
import { EducationItemComponent } from './components/education-item/education-item.component';

@Component({
  selector: 'app-education',
  imports: [SubtitleComponent, EducationItemComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  providers: [EducationStore],
})
export class EducationComponent {
  readonly store = inject(EducationStore);

  constructor() {
    this.store.fetchAll();
  }
}
