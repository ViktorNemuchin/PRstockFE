import { TestBed } from '@angular/core/testing';

import { PutOperationService } from './put-operation.service';

describe('PutOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutOperationService = TestBed.get(PutOperationService);
    expect(service).toBeTruthy();
  });
});
