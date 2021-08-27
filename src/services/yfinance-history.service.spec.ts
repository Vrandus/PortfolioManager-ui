import { TestBed } from '@angular/core/testing';

import { YfinanceHistoryService } from './yfinance-history.service';

describe('YfinanceHistoryService', () => {
  let service: YfinanceHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YfinanceHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
