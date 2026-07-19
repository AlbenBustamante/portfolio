import { TestBed } from '@angular/core/testing';

import { CertificateApiService } from './certificate-api.service';

describe('CertificateApiService', () => {
  let service: CertificateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
