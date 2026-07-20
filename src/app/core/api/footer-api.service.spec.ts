import { TestBed } from '@angular/core/testing';

import { FooterApiService } from './footer-api.service';

describe('FooterApiService', () => {
  let service: FooterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
