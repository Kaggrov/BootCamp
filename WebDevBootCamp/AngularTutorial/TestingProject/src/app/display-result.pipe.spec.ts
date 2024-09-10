import { TestBed } from '@angular/core/testing';
import { DisplayResultPipe } from './display-result.pipe';
import { AppComponent } from './app.component';

describe('DisplayResultPipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DisplayResultPipe],
    });
  });
  
  it('create an instance', () => {
    const pipe = new DisplayResultPipe();
    expect(pipe).toBeTruthy();
  });

  it('Check for Excellent', () => {
    const pipe = new DisplayResultPipe();
    expect(pipe.transform(80)).toBe("Excellent");
  });
  
  it('Check for Good', () => {
    const pipe = new DisplayResultPipe();
    expect(pipe.transform(64)).toBe("Good");
  });

  it('Check for Improvement', () => {
    const pipe = new DisplayResultPipe();
    expect(pipe.transform(34)).toBe("Need to Improve");
  });

});
