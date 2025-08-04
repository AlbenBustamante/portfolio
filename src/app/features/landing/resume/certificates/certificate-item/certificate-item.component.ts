import { Component, Input } from '@angular/core';
import { Certificate } from '@core/models/certificate.model';

@Component({
  selector: 'app-certificate-item',
  imports: [],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css',
})
export class CertificateItemComponent {
  @Input({ required: true }) certificate!: Certificate;
}
