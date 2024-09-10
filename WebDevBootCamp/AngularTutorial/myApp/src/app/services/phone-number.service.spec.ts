import { TestBed } from '@angular/core/testing';

import { PhoneNumberService } from './phone-number.service';

describe('PhoneNumberService', () => {
  let service: PhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should validate a correct phone number', () => {
    const validPhoneNumber = '1234567890';
    expect(service.isValidPhoneNumber(validPhoneNumber)).toBeTrue();
  });

  it('should not validate an incorrect phone number', () => {
    const invalidPhoneNumber = '12345';
    expect(service.isValidPhoneNumber(invalidPhoneNumber)).toBeFalse();
  });
});
