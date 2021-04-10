import { TestBed } from '@angular/core/testing';

import { ModuledService } from './moduled.service';

describe('ModuledService', () => {
  let service: ModuledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
