import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { MeStore } from '@features/me/me.store';

@Component({
  selector: 'app-education',
  imports: [SubtitleComponent, EducationItemComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  private readonly _store = inject(MeStore);

  get lang() {
    return this._store.lang().education;
  }

  get items() {
    return this.lang?.items;
  }
}
