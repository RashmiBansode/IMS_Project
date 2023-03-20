import { TestBed } from '@angular/core/testing';

import { RegstudentService } from './regstudent.service';

describe('RegstudentService', () => {
  let service: RegstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
