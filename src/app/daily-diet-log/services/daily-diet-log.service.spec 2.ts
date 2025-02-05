import { TestBed } from '@angular/core/testing';

import { DailyDietLogService } from './daily-diet-log.service';

describe('DailyDietLogService', () => {
  let service: DailyDietLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyDietLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
