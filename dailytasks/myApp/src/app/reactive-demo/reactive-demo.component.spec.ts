import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemoComponent } from './reactive-demo.component';

describe('ReactiveDemoComponent', () => {
  let component: ReactiveDemoComponent;
  let fixture: ComponentFixture<ReactiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveDemoComponent]
    });
    fixture = TestBed.createComponent(ReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
