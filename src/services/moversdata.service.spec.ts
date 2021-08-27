import { TestBed } from '@angular/core/testing';

import { MoversdataService } from './moversdata.service';

describe('MoversdataService', () => {
  let service: MoversdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoversdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
