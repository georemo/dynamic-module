import { TestBed } from '@angular/core/testing';

import { ModulecService } from './modulec.service';

describe('ModulecService', () => {
  let service: ModulecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
