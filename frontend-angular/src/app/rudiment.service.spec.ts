import { TestBed } from '@angular/core/testing';

import { RudimentService } from './rudiment.service';

describe('RudimentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RudimentService = TestBed.get(RudimentService);
    expect(service).toBeTruthy();
  });
});
