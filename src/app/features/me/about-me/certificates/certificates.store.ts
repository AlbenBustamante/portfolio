import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { MeStore } from '@features/me/me.store';

type State = {
  filter: { query: 'all' | 'featured'; order: 'asc' | 'desc' };
};

const initialState: State = {
  filter: { query: 'featured', order: 'asc' },
};

export const CertificateStore = signalStore(
  withState(initialState),
  withComputed(({ filter }, meStore = inject(MeStore)) => ({
    sortedCertificates: computed(() => {
      const certificates = meStore.lang().certificate;

      if (filter.query() === 'all') {
        return certificates?.items ?? [];
      }

      return certificates?.items.filter(
        (certificate) => certificate.featured === true,
      );
    }),
  })),
  withMethods((store) => ({
    updateQuery: (query: 'featured' | 'all') => {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
  })),
);
