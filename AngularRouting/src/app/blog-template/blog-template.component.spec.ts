import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTemplateComponent } from './blog-template.component';

describe('BlogTemplateComponent', () => {
  let component: BlogTemplateComponent;
  let fixture: ComponentFixture<BlogTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTemplateComponent]
    });
    fixture = TestBed.createComponent(BlogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
