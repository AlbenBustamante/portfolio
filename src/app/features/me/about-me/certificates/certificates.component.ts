import { Component, signal } from '@angular/core';
import { SubtitleComponent } from '@features/me/components/subtitle/subtitle.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { Certificate } from './components/certificate/certificate.model';

@Component({
  selector: 'app-certificates',
  imports: [SubtitleComponent, CertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  readonly certificates = signal<Certificate[]>([
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
  ]);
}
