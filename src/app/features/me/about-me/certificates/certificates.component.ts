import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CertificateStore } from './certificates.store';

@Component({
  selector: 'app-certificates',
  imports: [SubtitleComponent, CertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  providers: [CertificateStore],
})
export class CertificatesComponent {
  readonly store = inject(CertificateStore);
}
