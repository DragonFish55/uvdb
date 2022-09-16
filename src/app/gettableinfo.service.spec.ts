import { TestBed } from '@angular/core/testing';

import { GettableinfoService } from './gettableinfo.service';

describe('GettableinfoService', () => {
  let service: GettableinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettableinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
