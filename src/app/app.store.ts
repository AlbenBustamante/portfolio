import { computed, inject } from '@angular/core';
import { NavbarApiService } from '@core/api/navbar-api.service';
import { Lang } from '@core/models/lang.model';
import { NavbarModel } from '@core/models/navbar.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

interface State {
  loading: boolean;
  selectedLanguage: Lang | undefined;
  navbar: NavbarModel[];
}

const initialState: State = {
  loading: false,
  selectedLanguage: undefined,
  navbar: [],
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    lang: computed(() => store.selectedLanguage()?.label || 'en'),
  })),
  withMethods((store, navbarApi = inject(NavbarApiService)) => ({
    setLanguage: (language: Lang) => {
      patchState(store, { selectedLanguage: language });
    },
    fetchNavbar: () => {
      patchState(store, { loading: true });

      navbarApi.getNavbar().subscribe({
        next: (navbar) => {
          patchState(store, { navbar, loading: false });
        },
        error: (err) => {
          console.error(err);
          patchState(store, { loading: false });
        },
      });
    },
  })),
);
