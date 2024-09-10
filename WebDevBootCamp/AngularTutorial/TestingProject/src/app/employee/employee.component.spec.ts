import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthService } from '../services/auth.service';

describe('EmployeeComponent', () => { // For Dependency Service Testing
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let auth:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AuthService],
      declarations: [EmployeeComponent]
    });
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    auth = TestBed.inject(AuthService)
    fixture.detectChanges();
  });

 


  it('should create Employee service', () => {
    expect(component).toBeTruthy();
  });

  
  it('should check Auth  service and getSalarySlip', () => {

    spyOn(auth,'checkAuthentication').and.returnValue(true);
    let salSlip = component.getMySalarySlip();
    expect(salSlip).toEqual("You are an authorized Emloyee");
    expect(auth.checkAuthentication).toHaveBeenCalledTimes(1);
  });

  it('should check Auth service and getSalarySlip for false', () => {

    spyOn(auth,'checkAuthentication').and.returnValue(false);
    let salSlip = component.getMySalarySlip();
    expect(salSlip).toEqual("Un-authorized Employee");
    expect(auth.checkAuthentication).toHaveBeenCalledTimes(1);
  });




});
