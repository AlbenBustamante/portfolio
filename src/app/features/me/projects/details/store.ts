import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { GetProjectService } from '@core/services/get-project.service';
import { ProjectDetailModel } from '@core/models/project-detail.model';

type State = {
  project: ProjectDetailModel | null;
  selectedIndex: number;
};

const initialState: State = {
  project: null,
  selectedIndex: 0,
};

export const Store = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    gallery: computed(() => {
      const details = store.project();

      if (!details) {
        return [];
      }

      const { id, gallery } = details;

      if (!gallery) {
        return [
          'https://images.unsplash.com/photo-1586672806791-3a67d24186c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D',
        ];
      }

      return gallery.map((img) => `/images/projects/${id}-${img}`);
    }),
    isFirst: computed(() => {
      return store.selectedIndex() === 0;
    }),
    isLast: computed(() => {
      const project = store.project();

      if (!project) {
        return false;
      }

      return store.selectedIndex() === project.gallery.length - 1;
    }),
  })),
  withMethods((store, service = inject(GetProjectService)) => ({
    fetch: (id: string) => {
      service.get(id).subscribe({
        next: (project) => {
          patchState(store, { project });
        },
        error: (err) => console.warn({ err }),
      });
    },
    setSelectedIndex: (index: number) => {
      patchState(store, { selectedIndex: index });
    },
    setPrevious: () => {
      const selectedIndex = store.selectedIndex();

      if (selectedIndex > 0) {
        patchState(store, { selectedIndex: selectedIndex - 1 });
      }
    },
    setNext: () => {
      const selectedIndex = store.selectedIndex();

      if (selectedIndex < store.gallery().length - 1) {
        patchState(store, { selectedIndex: selectedIndex + 1 });
      }
    },
  }))
);
