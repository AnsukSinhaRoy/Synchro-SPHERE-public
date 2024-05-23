import { TestBed } from '@angular/core/testing';

import { CrmDataService } from './crm-data.service';

describe('CrmDataService', () => {
  let service: CrmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
