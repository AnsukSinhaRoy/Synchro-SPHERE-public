import { TestBed } from '@angular/core/testing';

import { LoginPageDataService } from './login-page-data.service';

describe('LoginPageDataService', () => {
  let service: LoginPageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
