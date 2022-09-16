import { TestBed } from '@angular/core/testing';

import { GetdbinfoService } from './getdbinfo.service';

describe('GetdbinfoService', () => {
  let service: GetdbinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdbinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
