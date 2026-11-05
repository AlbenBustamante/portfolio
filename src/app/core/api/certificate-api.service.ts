import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CertificateModel } from '@core/models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateApiService {
  private readonly _http = inject(HttpClient);

  getCertificate() {
    return this._http.get<CertificateModel>('/data/certificates.json');
  }
}
