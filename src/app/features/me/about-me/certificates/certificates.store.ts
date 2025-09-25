import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Certificate } from './models/certificate.model';
import { computed, inject } from '@angular/core';
import { CertificateService } from './services/certificate.service';

type State = {
  certificates: Certificate[];
  filter: { query: 'all' | 'featured'; order: 'asc' | 'desc' };
};

const initialState: State = {
  certificates: [],
  filter: { query: 'featured', order: 'asc' },
};

export const CertificateStore = signalStore(
  withState(initialState),
  withComputed(({ certificates, filter }) => ({
    sortedCertificates: computed(() => {
      if (filter.query() === 'all') {
        return certificates();
      }

      return certificates().filter(
        (certificate) => certificate.featured === true
      );
    }),
  })),
  withMethods((store, service = inject(CertificateService)) => ({
    fetchAll: () => {
      patchState(store, (_) => ({ certificates: service.certificates }));
    },
    updateQuery: (query: 'featured' | 'all') => {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
  }))
);
