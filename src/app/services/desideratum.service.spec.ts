import { TestBed } from '@angular/core/testing';

import { DesideratumService } from './desideratum.service';

describe('DesideratumService', () => {
  let service: DesideratumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesideratumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
