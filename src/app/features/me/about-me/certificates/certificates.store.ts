import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Certificate } from './components/certificate/certificate.model';
import { computed } from '@angular/core';

type State = {
  certificates: Certificate[];
  filter: { query: 'all' | 'featured'; order: 'asc' | 'desc' };
};

const initialState: State = {
  certificates: [
    {
      title: 'Curso de Angular: Creación de Aplicaciones Web',
      date: '2024',
      institute: 'Platzi',
      url: 'https://platzi.com/p/albenbustamante/curso/8352-course/diploma/detalle/',
      imageUrl: 'images/certificates/platzi_angular17.png',
      featured: true,
    },
    {
      title: 'Responsive Web Design',
      date: '2023',
      institute: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/certification/albenbustamante/responsive-web-design',
      imageUrl: 'images/certificates/freeCodeCamp_responsivewebdesign.png',
      featured: true,
    },
    {
      title: 'Java SE: SQL y Bases de Datos',
      date: '2024',
      institute: 'Platzi',
      url: 'https://platzi.com/p/albenbustamante/curso/8048-course/diploma/detalle/',
      imageUrl: 'images/certificates/platzi_javasesql.png',
      featured: false,
    },
  ],
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
  withMethods((store) => ({
    updateQuery: (query: 'featured' | 'all') => {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
  }))
);
