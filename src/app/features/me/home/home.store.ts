import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { HomeService } from './services/home.service';
import { AppStore } from 'app/app.store';
import { HomeModel } from './home.model';

interface State {
  home: HomeModel | undefined;
}

const initialState: State = {
  home: undefined,
};

export const HomeStore = signalStore(
  withState(initialState),
  withComputed((store, appStore = inject(AppStore)) => ({
    lang: computed(() => {
      const currentLang = appStore.lang();
      const home = store.home();

      return home?.[currentLang];
    }),
  })),
  withMethods((store, service = inject(HomeService)) => ({
    fetch: () => {
      service.getHome().subscribe({
        next: (home) => {
          patchState(store, { home });
        },
        error: (err) => {
          console.warn(err);
        },
      });
    },
  })),
);
