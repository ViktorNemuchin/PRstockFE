import { TestBed } from '@angular/core/testing';
import { GetOperationsService } from './get-operations.service';

describe('GetOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetOperationsService = TestBed.get(GetOperationsService);
    expect(service).toBeTruthy();
  });
});
