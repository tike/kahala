import { TestBed } from '@angular/core/testing';

import { InMemoryApiMock  } from './in-memory-api-mock.service';

describe('InMemoryApiMock ', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryApiMock  = TestBed.get(InMemoryApiMock);
    expect(service).toBeTruthy();
  });
});
