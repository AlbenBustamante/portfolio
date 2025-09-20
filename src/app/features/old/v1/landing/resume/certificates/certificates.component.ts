import { Component } from '@angular/core';
import { ResumeSectionComponent } from '../components/resume-section/resume-section.component';
import { CertificateService } from '@features/old/v1/core/services/certificate.service';
import { CertificateItemComponent } from './certificate-item/certificate-item.component';

@Component({
  selector: 'app-certificates',
  imports: [ResumeSectionComponent, CertificateItemComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  readonly certificates;

  constructor(private readonly _certificateService: CertificateService) {
    this.certificates = this._certificateService.certificates;
  }
}
