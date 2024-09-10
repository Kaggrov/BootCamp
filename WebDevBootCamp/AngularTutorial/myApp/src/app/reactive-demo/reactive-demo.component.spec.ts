import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemoComponent } from './reactive-demo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('ReactiveDemoComponent', () => {
  let component: ReactiveDemoComponent;
  let fixture: ComponentFixture<ReactiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveDemoComponent],
      imports:[FormsModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
