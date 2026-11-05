import { computed, inject } from '@angular/core';
import { FooterApiService } from '@core/api/footer-api.service';
import { NavbarApiService } from '@core/api/navbar-api.service';
import { FooterModel } from '@core/models/footer.model';
import { Lang } from '@core/models/lang.model';
import { NavbarModel } from '@core/models/navbar.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { forkJoin } from 'rxjs';

interface State {
  loading: boolean;
  selectedLanguage: Lang | undefined;
  navbar: NavbarModel[];
  footer: FooterModel | undefined;
}

const initialState: State = {
  loading: false,
  selectedLanguage: undefined,
  navbar: [],
  footer: undefined,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    lang: computed(() => store.selectedLanguage()?.label || 'en'),
  })),
  withMethods(
    (
      store,
      navbarApi = inject(NavbarApiService),
      footerApi = inject(FooterApiService),
    ) => ({
      setLanguage: (language: Lang) => {
        patchState(store, { selectedLanguage: language });
      },
      fetch: () => {
        patchState(store, { loading: true });

        forkJoin({
          navbar: navbarApi.getNavbar(),
          footer: footerApi.getFooter(),
        }).subscribe({
          next: ({ navbar, footer }) => {
            patchState(store, { navbar, footer, loading: false });
          },
          error: (err) => {
            console.error(err);
            patchState(store, { loading: false });
          },
        });
      },
    }),
  ),
);
