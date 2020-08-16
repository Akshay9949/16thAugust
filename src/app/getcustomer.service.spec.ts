import { TestBed } from '@angular/core/testing';

import { GetcustomerService } from './getcustomer.service';

describe('GetcustomerService', () => {
  let service: GetcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
