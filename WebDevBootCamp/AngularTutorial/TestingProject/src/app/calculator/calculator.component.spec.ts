import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { LoggerService } from '../services/logger.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calc: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    calc = TestBed.inject(LoggerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check Add Operation', () => {
    spyOn(calc, 'log');
    const res = component.add(1, 2);
    expect(res).toBe(3);
  });

  it('should check Subtract Operation', () => {
    spyOn(calc, 'log');
    const res = component.subtract(2, 2);
    expect(res).toBe(0);
  });
});
