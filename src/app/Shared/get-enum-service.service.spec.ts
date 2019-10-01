import { TestBed } from '@angular/core/testing';

import { GetEnumServiceService } from './get-enum-service.service';

describe('GetEnumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetEnumServiceService = TestBed.get(GetEnumServiceService);
    expect(service).toBeTruthy();
  });
});
