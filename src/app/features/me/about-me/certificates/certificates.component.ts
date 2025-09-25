import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CertificateStore } from './certificates.store';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-certificates',
  imports: [NgClass, SubtitleComponent, CertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  providers: [CertificateStore],
})
export class CertificatesComponent {
  readonly store = inject(CertificateStore);
}
