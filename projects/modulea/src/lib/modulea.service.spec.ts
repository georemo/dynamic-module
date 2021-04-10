import { TestBed } from '@angular/core/testing';

import { ModuleaService } from './modulea.service';

describe('ModuleaService', () => {
  let service: ModuleaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
