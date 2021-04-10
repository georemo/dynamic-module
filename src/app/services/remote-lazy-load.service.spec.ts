import { TestBed } from '@angular/core/testing';

import { RemoteLazyLoadService } from './remote-lazy-load.service';

describe('RemoteLazyLoadService', () => {
  let service: RemoteLazyLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteLazyLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
