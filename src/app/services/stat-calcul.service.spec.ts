import { TestBed } from '@angular/core/testing';

import { StatCalculService } from './stat-calcul.service';

describe('StatCalculService', () => {
  let service: StatCalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatCalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
