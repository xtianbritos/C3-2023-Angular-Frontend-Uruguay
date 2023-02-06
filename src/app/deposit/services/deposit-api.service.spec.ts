import { TestBed } from '@angular/core/testing';

import { DepositApiService } from './deposit-api.service';

describe('DepositApiService', () => {
  let service: DepositApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
