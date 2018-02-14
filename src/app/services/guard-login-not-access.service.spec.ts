import { TestBed, inject } from '@angular/core/testing';

import { GuardLoginNotAccessService } from './guard-login-not-access.service';

describe('GuardLoginNotAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardLoginNotAccessService]
    });
  });

  it('should be created', inject([GuardLoginNotAccessService], (service: GuardLoginNotAccessService) => {
    expect(service).toBeTruthy();
  }));
});
