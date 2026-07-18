import { signalStore, withMethods, withState } from '@ngrx/signals';
import { SkillsAndTechnologiesModel } from './skills-and-technologies.model';
import { inject } from '@angular/core';
import { SkillsApiService } from '@core/api/skills-api.service';

interface State {
  skills: SkillsAndTechnologiesModel | undefined;
}

const initialState: State = {
  skills: undefined,
};

export const SkillsStore = signalStore(
  withState(initialState),
  withMethods((store, api = inject(SkillsApiService)) => ({})),
);
