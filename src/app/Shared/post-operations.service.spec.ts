import { TestBed } from '@angular/core/testing';

import { PostOperationsService } from './post-operations.service';

describe('PostOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostOperationsService = TestBed.get(PostOperationsService);
    expect(service).toBeTruthy();
  });
});
