import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiComponent } from './hindi.component';

describe('HindiComponent', () => {
  let component: HindiComponent;
  let fixture: ComponentFixture<HindiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HindiComponent]
    });
    fixture = TestBed.createComponent(HindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
