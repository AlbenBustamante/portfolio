import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AboutMeService } from './services/about-me.service';

type State = {
  description: string[];
};

const initialState: State = {
  description: [],
};

export const AboutMeStore = signalStore(
  withState(initialState),
  withMethods((store, service = inject(AboutMeService)) => ({
    fetch: () => {
      const description = service.getDescription('en');
      patchState(store, (_) => ({ description }));
    },
  }))
);
