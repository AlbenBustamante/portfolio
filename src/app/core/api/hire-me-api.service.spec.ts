import { TestBed } from '@angular/core/testing';

import { HireMeApiService } from './hire-me-api.service';

describe('HireMeApiService', () => {
  let service: HireMeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireMeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
