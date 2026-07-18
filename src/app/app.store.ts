import { computed } from '@angular/core';
import { Lang } from '@core/models/lang.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

interface State {
  selectedLanguage: Lang | undefined;
}

const initialState: State = {
  selectedLanguage: undefined,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    lang: computed(() => store.selectedLanguage()?.label || 'en'),
  })),
  withMethods((store) => ({
    setLanguage: (language: Lang) => {
      patchState(store, { selectedLanguage: language });
    },
  })),
);
