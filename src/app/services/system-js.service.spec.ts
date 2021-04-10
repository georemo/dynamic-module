import { TestBed } from '@angular/core/testing';

import { SystemJsService } from './system-js.service';

describe('SystemJsService', () => {
  let service: SystemJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
