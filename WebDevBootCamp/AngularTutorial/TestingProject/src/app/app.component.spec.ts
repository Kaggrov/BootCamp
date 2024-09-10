import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DisplayResultPipe } from './display-result.pipe';
import { LoggerService } from './services/logger.service';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';

describe('AppComponent', () => {
  
  let deb: DebugElement;
  let h2: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, DisplayResultPipe,EmployeeComponent],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TestingProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TestingProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'TestingProject app is running!'
    );
  });

  it('Testing Button Functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    let h1: HTMLElement;
    h1 = fixture.nativeElement.querySelector('p');
    component.addButton(23, 45);
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.addition);
  });

  it('Testing Increase Functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    deb = fixture.debugElement;
    let h2: HTMLElement;
    h2 = fixture.nativeElement.querySelector('h2');

    const btn = deb.query(By.css('#inc'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.counter).toEqual(parseInt(h2.innerText));
  });

  it('Testing Decrease Functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    deb = fixture.debugElement;
    let h2: HTMLElement;
    h2 = fixture.nativeElement.querySelector('h2');

    const btn = deb.query(By.css('#dec'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.counter).toEqual(parseInt(h2.innerText));
  });

  it('Testing Interpolation Functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    deb = fixture.debugElement;
    const name = deb.query(By.css('#name'));

    fixture.detectChanges();
    expect(component.name).toEqual(name.nativeElement.innerText);
  });

  it('Testing whenStable for ngModule Functionality', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    deb = fixture.debugElement;

    component.currentName = 'Hello';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const inp: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#myInp');
      expect(inp.value).toEqual('Hello');
      done();
    });
  });
});
