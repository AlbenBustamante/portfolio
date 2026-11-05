import { Component, inject } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillComponent } from '../skill/skill.component';
import { DartIconComponent } from '../icons/dart-icon/dart-icon.component';
import { FlutterIconComponent } from '../icons/flutter-icon/flutter-icon.component';
import { MeStore } from '@features/me/me.store';

@Component({
  selector: 'app-mobile-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    DartIconComponent,
    FlutterIconComponent,
  ],
  templateUrl: './mobile-skills.component.html',
  styleUrl: './mobile-skills.component.css',
})
export class MobileSkillsComponent {
  private readonly _store = inject(MeStore);

  get title() {
    return this._store.lang().skills?.mobile;
  }
}
