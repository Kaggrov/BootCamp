import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('zero length',()=>{
    expect(service.messages.length).toBe(0)
  })

  it('Unity length',()=>{
    service.log("Hello Hello")
    expect(service.messages.length).toBe(1)
  })
  it('Clear length',()=>{
    service.clearLog()
    expect(service.messages.length).toBe(0)
  })
});
