import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Experience } from './models/experience.model';
import { inject } from '@angular/core';
import { ExperienceService } from './services/experience.service';

type State = {
  experiences: Experience[];
};

const initialState: State = {
  experiences: [],
};

export const ExperienceStore = signalStore(
  withState(initialState),
  withMethods((store, service = inject(ExperienceService)) => ({
    fetchAll: () => {
      const experiences = service.getExperience('en');
      patchState(store, (_) => ({ experiences }));
    },
  }))
);
