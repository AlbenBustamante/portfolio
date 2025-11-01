import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { GetProjectService } from './get-project.service';
import { ProjectDetailModel } from './model';

type State = {
  project: ProjectDetailModel | null;
};

const initialState: State = {
  project: null,
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
