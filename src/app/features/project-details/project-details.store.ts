import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ProjectDetailsApiService } from '@core/api/project-details-api.service';
import {
  ProjectDetailItemModel,
  ProjectDetailModel,
} from '@core/models/project-detail.model';
import { forkJoin } from 'rxjs';
import { AppStore } from 'app/app.store';

type State = {
  project: ProjectDetailItemModel | null;
  projectDetails: ProjectDetailModel | undefined;
  selectedIndex: number;
  loading: boolean;
};

const initialState: State = {
  project: null,
  projectDetails: undefined,
  selectedIndex: 0,
  loading: false,
};

export const ProjectDetailsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store, appStore = inject(AppStore)) => ({
    lang: computed(() => {
      const lang = appStore.lang();
      return {
        projectDetails: store.projectDetails()?.[lang],
        projectDescription: store.project()?.[lang].description,
      };
    }),
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

      if (!project || !project.gallery) {
        return true;
      }

      return store.selectedIndex() === project.gallery.length - 1;
    }),
  })),
  withMethods((store, api = inject(ProjectDetailsApiService)) => ({
    fetch: (id: string) => {
      patchState(store, { loading: true });

      forkJoin({
        projectDetails: api.getProjectDetails(),
        project: api.getProjectDetailsData(id),
      }).subscribe({
        next: ({ project, projectDetails }) => {
          patchState(store, { projectDetails, project, loading: false });
        },
        error: (err) => {
          console.error(err);
          patchState(store, { loading: false });
        },
      });
    },
    setSelectedIndex: (index: number) => {
      patchState(store, { selectedIndex: index });
    },
    setPrevious: () => {
      const selectedIndex = store.selectedIndex();

      if (selectedIndex > 0) {
        patchState(store, { selectedIndex: selectedIndex - 1 });
      } else {
        patchState(store, { selectedIndex: store.gallery().length - 1 });
      }
    },
    setNext: () => {
      const selectedIndex = store.selectedIndex();

      if (selectedIndex < store.gallery().length - 1) {
        patchState(store, { selectedIndex: selectedIndex + 1 });
      } else {
        patchState(store, { selectedIndex: 0 });
      }
    },
  })),
);
