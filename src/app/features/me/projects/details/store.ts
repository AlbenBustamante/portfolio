import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { GetProjectService } from './get-project.service';

type State = {
  project: any;
};

const initialState: State = {
  project: {},
};

export const Store = signalStore(
  withState(initialState),
  withMethods((store, service = inject(GetProjectService)) => ({
    fetch: (id: string) => {
      service.get(id).subscribe({
        next: (project) => patchState(store, { project }),
        error: (err) => console.warn({ err }),
      });
    },
  }))
);
