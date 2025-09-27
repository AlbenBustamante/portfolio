import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Education } from './models/education.model';
import { inject } from '@angular/core';
import { EducationService } from './services/education.service';

type State = {
  educations: Education[];
};

const initialState: State = {
  educations: [],
};

export const EducationStore = signalStore(
  withState(initialState),
  withMethods((store, service = inject(EducationService)) => ({
    fetchAll: () => {
      const educations = service.getEducations('en');
      patchState(store, (_) => ({ educations }));
    },
  }))
);
