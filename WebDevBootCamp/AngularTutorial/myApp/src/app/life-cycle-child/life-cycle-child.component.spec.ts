import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChildComponent } from './life-cycle-child.component';

describe('LifeCycleChildComponent', () => {
  let component: LifeCycleChildComponent;
  let fixture: ComponentFixture<LifeCycleChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCycleChildComponent]
    });
    fixture = TestBed.createComponent(LifeCycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
