import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  constructor() { }
  isValidPhoneNumber(phoneNumber: string): boolean {
    // Your validation logic here
    // For example, you could use a regular expression to validate the phone number format
    const phonePattern = /^\d{10}$/; // Example pattern: 10 digits
    return phonePattern.test(phoneNumber);
  }
}
