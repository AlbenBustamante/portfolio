import { inject } from '@angular/core';
import { NavbarModel } from '@core/models/navbar.model';
import { NavbarService } from '@core/services/navbar.service';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface State {
  navigation: NavbarModel[];
}

const initialState: State = {
  navigation: [],
};

export const NavbarStore = signalStore(
  withState(initialState),
  withMethods((store, service = inject(NavbarService)) => ({
    fetch: () => {
      service.getNavbar().subscribe({
        next: (navigation) => {
          patchState(store, { navigation });
        },
        error: (err) => {
          console.warn(err);
        },
      });
    },
  })),
);
