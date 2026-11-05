import { Component, inject, input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { ProjectCardContentComponent } from '../project-card-content/project-card-content.component';
import { ButtonComponent } from '@components/button/button.component';
import { RightArrowIconComponent } from '@components/right-arrow-icon/right-arrow-icon.component';
import { ProjectItemModel } from '@core/models/project.model';
import { AppStore } from 'app/app.store';
import { MeStore } from '@features/me/me.store';

@Component({
  selector: 'app-project-card',
  imports: [
    CardComponent,
    ProjectCardContentComponent,
    ButtonComponent,
    RightArrowIconComponent,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  private readonly _meStore = inject(MeStore);
  readonly appStore = inject(AppStore);
  readonly loading = input<'eager' | 'lazy'>('eager');
  readonly project = input.required<ProjectItemModel>();

  get lang() {
    return this._meStore.lang().project;
  }

  get cta() {
    return this.lang?.cta ?? '';
  }

  get category() {
    return this.lang?.category[this.project().category] ?? '';
  }

  get status() {
    return this.lang?.status[this.project().status] ?? '';
  }
}
