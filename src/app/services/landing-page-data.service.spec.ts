import { TestBed } from '@angular/core/testing';

import { LandingPageDataService } from './landing-page-data.service';

describe('LandingPageDataService', () => {
  let service: LandingPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
