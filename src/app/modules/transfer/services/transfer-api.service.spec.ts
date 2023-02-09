import { TestBed } from '@angular/core/testing';

import { TransferApiService } from './transfer-api.service';

describe('TransferApiService', () => {
  let service: TransferApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
