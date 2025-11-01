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
      service.getAll().subscribe({
        next: (projects) => {
          projects.map((project) => {
            const thumbnail = project.thumbnail;

            project.thumbnail =
              thumbnail === null
                ? 'https://images.unsplash.com/photo-1586672806791-3a67d24186c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D'
                : `/images/projects/${thumbnail}`;

            return project;
          });

          patchState(store, (_) => ({ projects }));
        },
        error: (err) => console.warn(err),
      });
    },
  }))
);
