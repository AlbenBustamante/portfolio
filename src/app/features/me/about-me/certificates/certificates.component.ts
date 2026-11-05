import { Component, inject } from '@angular/core';
import { SubtitleComponent } from '@components/subtitle/subtitle.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CertificateStore } from './certificates.store';
import { NgClass } from '@angular/common';
import { MeStore } from '@features/me/me.store';

@Component({
  selector: 'app-certificates',
  imports: [NgClass, SubtitleComponent, CertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  providers: [CertificateStore],
})
export class CertificatesComponent {
  private readonly _meStore = inject(MeStore);
  readonly store = inject(CertificateStore);

  get lang() {
    return this._meStore.lang().certificate;
  }
}
