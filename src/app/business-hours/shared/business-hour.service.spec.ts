import { TestBed } from '@angular/core/testing';

import { BusinessHourService } from './business-hour.service';

describe('BusinessHourService', () => {
  let service: BusinessHourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessHourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
