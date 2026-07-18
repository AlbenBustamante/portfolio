import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AboutMeService } from './services/about-me.service';
import { AboutMeModel } from './about-me.model';
import { AppStore } from 'app/app.store';

type State = {
  aboutMe: AboutMeModel | undefined;
};

const initialState: State = {
  aboutMe: undefined,
};

export const AboutMeStore = signalStore(
  withState(initialState),
  withComputed(({ aboutMe }, appStore = inject(AppStore)) => ({
    lang: computed(() => aboutMe()![appStore.lang()]),
  })),
  withMethods((store, service = inject(AboutMeService)) => ({
    fetch: () => {
      service.getAboutMe().subscribe({
        next: (aboutMe) => {
          patchState(store, { aboutMe });
        },
        error: (err) => {
          console.warn(err);
        },
      });
    },
  })),
);
