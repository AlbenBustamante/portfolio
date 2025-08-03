import { Component } from '@angular/core';
import { ResumeSectionComponent } from '../components/resume-section/resume-section.component';
import { CertificateService } from '@core/services/certificate.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-certificates',
  imports: [ResumeSectionComponent, JsonPipe],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  readonly certificates;

  constructor(private readonly _certificateService: CertificateService) {
    this.certificates = this._certificateService.certificates;
  }
}
