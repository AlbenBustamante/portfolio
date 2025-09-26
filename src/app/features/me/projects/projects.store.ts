import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Project } from './models/project.model';
import { computed, inject } from '@angular/core';
import { ProjectService } from './services/project.service';

type State = {
  projects: Project[];
};

const initialState: State = {
  projects: [],
};

export const ProjectStore = signalStore(
  withState(initialState),
  withComputed(({ projects }) => ({
    featured: computed(() => {
      return projects().filter((project) => project.featured);
    }),
    noFeatured: computed(() => {
      return projects().filter((project) => !project.featured);
    }),
  })),
  withMethods((store, service = inject(ProjectService)) => ({
    fetchAll: () => {
      const projects = service.projects;
      patchState(store, (_) => ({ projects }));
    },
  }))
);
