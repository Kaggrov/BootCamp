import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule,} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,HttpClientModule,HttpClientTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Testing Convert Button Functionality', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    let h1: HTMLElement;
    h1 = fixture.nativeElement.querySelector('p');
    component.convert('USD','INR',1000);
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.convertedValue);
  });


});
