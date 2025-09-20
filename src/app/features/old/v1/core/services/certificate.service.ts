import { Injectable } from '@angular/core';
import certificates from '@assets/data/certificates.json';
import { Certificate } from '@features/old/v1/core/models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  get certificates() {
    return certificates as Certificate[];
  }
}
