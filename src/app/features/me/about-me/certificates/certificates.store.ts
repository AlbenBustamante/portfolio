import { signalStore, withState } from '@ngrx/signals';
import { Certificate } from './components/certificate/certificate.model';

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
    },
    {
      title: 'Responsive Web Design',
      date: '2023',
      institute: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/certification/albenbustamante/responsive-web-design',
    },
  ],
  filter: { query: 'featured', order: 'asc' },
};

export const CertificateStore = signalStore(withState(initialState));
