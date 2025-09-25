import { Component, input } from '@angular/core';
import { Certificate } from './certificate.model';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-certificate',
  imports: [CardComponent],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css',
})
export class CertificateComponent {
  readonly certificate = input.required<Certificate>();
}
