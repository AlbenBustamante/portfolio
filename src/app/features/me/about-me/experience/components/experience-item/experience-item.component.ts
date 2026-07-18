import { Component, inject, input } from '@angular/core';
import { ExperienceItemModel } from '@core/models/experience.model';
import { BulletContentComponent } from '@features/me/about-me/components/bullet-content/bullet-content.component';
import { AppStore } from 'app/app.store';

@Component({
  selector: 'app-experience-item',
  imports: [BulletContentComponent],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
})
export class ExperienceItemComponent {
  private readonly _appStore = inject(AppStore);
  readonly experience = input<ExperienceItemModel>();

  get lang() {
    return this.experience()?.[this._appStore.lang()];
  }
}
