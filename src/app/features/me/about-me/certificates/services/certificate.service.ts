import { Injectable } from '@angular/core';
import certificates from '@public/data/certificates.json';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  get certificates() {
    return certificates as Certificate[];
  }
}
