import { TestBed } from '@angular/core/testing';

import { ModulebService } from './moduleb.service';

describe('ModulebService', () => {
  let service: ModulebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
