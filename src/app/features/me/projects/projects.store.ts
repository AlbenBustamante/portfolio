import { signalStore, withComputed } from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { MeStore } from '../me.store';

export const ProjectStore = signalStore(
  withComputed((_, meStore = inject(MeStore)) => ({
    featured: computed(() => {
      const projects = meStore.project()?.items ?? [];
      return projects.filter((project) => project.section === 'FEATURED');
    }),
    collaboration: computed(() => {
      const projects = meStore.project()?.items ?? [];
      return projects.filter((project) => project.section === 'COLLABORATION');
    }),
    small: computed(() => {
      const projects = meStore.project()?.items ?? [];
      return projects.filter((project) => project.section === 'SMALL');
    }),
  })),
);
