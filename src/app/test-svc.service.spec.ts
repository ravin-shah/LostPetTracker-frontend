import { TestBed } from '@angular/core/testing';

import { TestSvcService } from './test-svc.service';

describe('TestSvcService', () => {
  let service: TestSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
