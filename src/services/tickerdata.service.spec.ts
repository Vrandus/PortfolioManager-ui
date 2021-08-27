import { TestBed } from '@angular/core/testing';

import { TickerdataService } from './tickerdata.service';

describe('TickerdataService', () => {
  let service: TickerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
