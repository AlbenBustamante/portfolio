import { Component, input } from '@angular/core';
import { Certificate } from './certificate.model';

@Component({
  selector: 'app-certificate',
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css',
})
export class CertificateComponent {
  readonly certificate = input.required<Certificate>();
}
